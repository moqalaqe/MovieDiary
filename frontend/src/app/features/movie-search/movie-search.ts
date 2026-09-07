import { Component, inject, signal } from '@angular/core';
import { SearchBar } from '../../shared/components/search-bar/search-bar';
import { SearchDropdown } from './components/search-dropdown/search-dropdown';
import { Movie } from '../../core/models/movie.model';
import { MovieService } from '../../core/services/movies.service';

@Component({
  selector: 'app-movie-search',
  imports: [SearchBar, SearchDropdown],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.scss',
})
export class MovieSearch {
  private readonly movieService = inject(MovieService);
  public readonly searchResult = signal<Movie[]>([]);

  public onSearch(value: string): void {
    this.movieService
      .searchMovie(value)
      .pipe()
      .subscribe((res) => this.searchResult.set(res.Search));
  }
}
