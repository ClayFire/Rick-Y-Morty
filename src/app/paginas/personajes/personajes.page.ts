import { Component, OnInit } from '@angular/core';
import { RickApiService } from './../../servicios/rick-api.service';
import { ListaPersonaje, personajeparcial} from './modelo/lista-personaje';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  public personajes: Array<personajeparcial> = [];
  constructor(

    private apiRick: RickApiService
  ) { }

  ngOnInit() {
    this.apiRick.obtenerPrimerosPersonajes()
  .subscribe( losDatos => {
    this.personajes = losDatos.results});
  }

}
