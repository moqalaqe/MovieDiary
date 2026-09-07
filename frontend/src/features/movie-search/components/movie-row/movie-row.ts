import { Component, inject, input } from '@angular/core';
import { Movie } from '../../../../../core/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-row',
  imports: [],
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.scss',
})
export class MovieRow {
  public readonly movieRowData = input.required<Movie>();

  private readonly router = inject(Router);

  public goToDetails(): void {
    this.router.navigate(['/details', this.movieRowData().imdbID]);
  }
}
