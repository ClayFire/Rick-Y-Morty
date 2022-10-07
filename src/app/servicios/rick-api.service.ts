import { Injectable } from '@angular/core';

//
import { HttpClient } from '@angular/common/http';
import { ListaPersonaje } from './../paginas/personajes/modelo/lista-personaje';
import { Observable } from 'rxjs';
//


@Injectable({
  providedIn: 'root'
})
export class RickApiService {

  public URL_API: string = 'https://rickandmortyapi.com/api/character';

  constructor(
    private cliente: HttpClient
  ) { }

  public obtenerPrimerosPersonajes():Observable<ListaPersonaje> {
    return this.cliente.get<ListaPersonaje>(this.URL_API);
  }

}
