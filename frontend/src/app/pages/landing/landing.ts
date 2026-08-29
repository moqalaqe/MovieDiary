import { Component, inject } from '@angular/core';
import { SearchBar } from '../../shared/components/search-bar/search-bar';
import { SearchMovie } from '../../core/services/search-movie';

@Component({
  selector: 'app-landing',
  imports: [SearchBar],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly searchMovieService = inject(SearchMovie);

  public onSearch(value: string): void {
    this.searchMovieService.searchMovie(value).pipe().subscribe(console.log);
  }
}
