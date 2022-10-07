import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //que esté en blanco deja a entender de que es la primera pagina
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./paginas/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./paginas/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'personajes/:id',
    loadChildren: () => import('./paginas/info-personajes/info-personajes.module').then( m => m.InfoPersonajesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
