import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pagina1', pathMatch: 'full' },
  {
    path: 'pagina1',
    loadChildren: () => import('./pagina1/pagina1.module').then(m => m.Pagina1PageModule)
  },
  {
    path: 'pokemon-details',
    loadChildren: () => import('./pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsPageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./sidebar/sidebar.module').then(m => m.SidebarModule)
  },  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

