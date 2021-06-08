import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoCliente } from '../models/PedidoCliente';

@Injectable({
  providedIn: 'root'
})
export class PedidoclienteService {

baseURL = 'https://localhost:44373/api/PedidoCliente';
constructor(private http: HttpClient) { }

getEventos(): Observable<PedidoCliente[]>{
  return this.http.get<PedidoCliente[]>(this.baseURL);
}
getEventoByTema(tema: string): Observable<PedidoCliente[]>{
  return this.http.get<PedidoCliente[]>(`${this.baseURL}/${tema}/tema`);
}
getEventoByID(id: number): Observable<PedidoCliente[]>{
  return this.http.get<PedidoCliente[]>(`${this.baseURL}/${id}`);
}
}
