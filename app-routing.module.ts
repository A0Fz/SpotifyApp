import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'music-details', loadChildren: './music-details/music-details/music-details.module#MusicDetailsPageModule' },
  { path: 'artist-details', loadChildren: './artist-details/artist-details/artist-details.module#ArtistDetailsPageModule' },
  { path: 'album-details', loadChildren: './album-details/album-details/album-details.module#AlbumDetailsPageModule' },
  { path: 'album-details', loadChildren: './album-details/album-details.module#AlbumDetailsPageModule' },
  { path: 'music-details', loadChildren: './music-details/music-details.module#MusicDetailsPageModule' },
  { path: 'artist-details', loadChildren: './artist-details/artist-details.module#ArtistDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
