import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPersonajesPage } from './info-personajes.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPersonajesPageRoutingModule {}
