import { Component, input } from '@angular/core';
import { Movie } from '../../../../../core/models/movie.model';

@Component({
  selector: 'app-movie-row',
  imports: [],
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.scss',
})
export class MovieRow {
  public readonly movieRowData = input.required<Movie>();
}
