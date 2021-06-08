import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { PedidoclienteService } from '../services/pedidocliente.service';

@Component({
  selector: 'app-PedidosClientes',
  templateUrl: './PedidosClientes.component.html',
  styleUrls: ['./PedidosClientes.component.scss']
})
export class PedidosClientesComponent implements OnInit {

//   public pedidos: any = [
//     {
//       PedidosClientesId : '1',
//       Funcionario: 'Rene',
//       ProdutoSolicitado: 'COD',
//       Plataforma: 'PS4',
//       DataSolicitacao: '01/01',
//       NomeCliente: 'Claudio',
//       TelefoneCliente: '1111',
//       SituacaoDoPedido: 'Pendente',
//     },
//     {
//       PedidosClientesId : '2',
//       Funcionario: '2323',
//       ProdutoSolicitado: 'COD',
//       Plataforma: 'PS3',
//       DataSolicitacao: '01/01',
//       NomeCliente: 'Claudio',
//       TelefoneCliente: '1111',
//       SituacaoDoPedido: 'Pendente',
//     }
// ];


modalRef = {} as BsModalRef;
public pedidos: any = [];
constructor(
  private eventoService: PedidoclienteService,
  private modalService: BsModalService) { }

// tslint:disable-next-line: typedef
ngOnInit() {
  this.getEventos();
}
// public getEventos(): void{
//   this.http.get('https://localhost:44373/api/PedidoCliente').subscribe(
//     response => this.pedidos = response,
//     error => console.log(error)
//     );
// }
public getEventos(): void{
  this.eventoService.getEventos().subscribe(
     response => this.pedidos = response,
     error => console.log(error)
    );
}

openModal(template: TemplateRef<any>): void {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

confirm(): void {
  this.modalRef.hide();
}

decline(): void {
      this.modalRef.hide();
}


}
