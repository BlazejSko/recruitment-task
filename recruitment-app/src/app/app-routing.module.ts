import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './shared/movie-list/movie-list.component';
import { MoviePageComponent } from './shared/movie-list/movie-page/movie-page.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent, children: [
    { path: ':id', component: MoviePageComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
