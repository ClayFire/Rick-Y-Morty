import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPersonajesPageRoutingModule } from './info-personajes-routing.module';

import { InfoPersonajesPage } from './info-personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPersonajesPageRoutingModule
  ],
  declarations: [InfoPersonajesPage]
})
export class InfoPersonajesPageModule {}
