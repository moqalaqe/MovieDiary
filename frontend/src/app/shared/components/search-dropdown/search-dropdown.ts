import { Component, effect, input } from '@angular/core';
import { Movie } from '../../../core/models/movie.model';

@Component({
  selector: 'app-search-dropdown',
  imports: [],
  templateUrl: './search-dropdown.html',
  styleUrl: './search-dropdown.scss',
})
export class SearchDropdown {
  public readonly dropDownData = input.required<Movie[]>();
}
