import { Component, inject, signal } from '@angular/core';
import { SearchBar } from '../../shared/components/search-bar/search-bar';
import { SearchMovie } from '../../core/services/search-movie';
import { SearchDropdown } from '../../shared/components/search-dropdown/search-dropdown';
import { MovieDetails } from '../movie-details/movie-details';
import { Movie } from '../../core/models/movie.model';

@Component({
  selector: 'app-landing',
  imports: [SearchBar, SearchDropdown],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly searchMovieService = inject(SearchMovie);
  public readonly searchResult = signal<Movie[]>([]);

  public onSearch(value: string): void {
    this.searchMovieService
      .searchMovie(value)
      .pipe()
      .subscribe((res) => this.searchResult.set(res.Search));
  }
}
