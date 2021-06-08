import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

//
import { Evento } from '../models/Evento';
import { EventoService } from '../services/Evento.service';



@Component({

  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  modalRef = {} as BsModalRef;
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  private filtroListado = '';

  public get filtroLista(): string{
    return this.filtroListado;
  }
  // Filtro
  public set filtroLista(value: string){
    this.filtroListado = value;

    // verificar se a variavel eventos tem valor, caso tenha vai para o metodo
    this.eventosFiltrados = this.filtroListado ? this.filtrarEventos(this.filtroLista) : this.eventos;

  }

  filtrarEventos(filtrarPor: string):Evento[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor)!== -1 ||
                       evento.local.toLocaleLowerCase().indexOf(filtrarPor)!== -1
    );

  }



  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getEventos();
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }
  public getEventos(): void{
    this.eventoService.getEventos().subscribe(
      (eventosResp: Evento[]) => {
        this.eventos = eventosResp;
        this.eventosFiltrados = this.eventos;
      }
      ,
      error => console.log(error)
      );
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef.hide();
    this.toastr.success('Apagado com sucesso!', 'Toastr fun!');
  }

  decline(): void {
        this.modalRef.hide();
  }
}
