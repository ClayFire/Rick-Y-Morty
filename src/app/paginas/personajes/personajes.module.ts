import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonajesPageRoutingModule } from './personajes-routing.module';
import { PersonajesPage } from './personajes.page';



import { RickApiService } from './../../servicios/rick-api.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajesPageRoutingModule,
    HttpClientModule // <--- provee el servicio httpclient
  ],
  declarations: [PersonajesPage],
  providers: [
    RickApiService //requiere httpclient
  ]
})
export class PersonajesPageModule {}
