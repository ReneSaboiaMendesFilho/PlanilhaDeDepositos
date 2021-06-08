import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
baseURL = 'https://localhost:44373/api/Evento';
constructor(private http: HttpClient) { }

getEventos(): Observable<Evento[]>{
  return this.http.get<Evento[]>(this.baseURL)
}
getEventoByTema(tema: string): Observable<Evento[]>{
  return this.http.get<Evento[]>(`${this.baseURL}/${tema}/tema`)
}
getEventoByID(id: number): Observable<Evento[]>{
  return this.http.get<Evento[]>(`${this.baseURL}/${id}`)
}

}
