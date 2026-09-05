import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { MovieDetails } from './pages/movie-details/movie-details';
import { ListDetails } from './pages/list-details/list-details';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'details/:id', component: MovieDetails },
  { path: 'list/:id', component: ListDetails },
];
