import { Component, effect, input } from '@angular/core';
import { Movie } from '../../../core/models/movie.model';
import { MovieRow } from './components/movie-row/movie-row';
import { NgxScrollbarComponent } from '@omnedia/ngx-scrollbar';

@Component({
  selector: 'app-search-dropdown',
  imports: [MovieRow, NgxScrollbarComponent],
  templateUrl: './search-dropdown.html',
  styleUrl: './search-dropdown.scss',
})
export class SearchDropdown {
  public readonly dropDownData = input.required<Movie[]>();
}
