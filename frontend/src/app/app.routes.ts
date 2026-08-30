import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { MovieDetails } from './pages/movie-details/movie-details';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'details', component: MovieDetails },
];
