import { Component, input } from '@angular/core';
import { MovieRow } from '../movie-row/movie-row';
import { NgxScrollbarComponent } from '@omnedia/ngx-scrollbar';
import { Movie } from '../../../../app/core/models/movie.model';

@Component({
  selector: 'app-search-dropdown',
  imports: [MovieRow, NgxScrollbarComponent],
  templateUrl: './search-dropdown.html',
  styleUrl: './search-dropdown.scss',
})
export class SearchDropdown {
  public readonly dropDownData = input.required<Movie[]>();
}
