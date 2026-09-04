import { Component, inject, signal } from '@angular/core';
import { SearchBar } from '../../shared/components/search-bar/search-bar';
import { SearchMovie } from '../../core/services/search-movie';
import { SearchDropdown } from '../../shared/components/search-dropdown/search-dropdown';
import { Movie } from '../../core/models/movie.model';
import { Carousel } from '../../shared/components/carousel/carousel';
import { CollectionCard } from './components/collection-card/collection-card';

@Component({
  selector: 'app-landing',
  imports: [SearchBar, SearchDropdown, Carousel],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly searchMovieService = inject(SearchMovie);
  public readonly searchResult = signal<Movie[]>([]);

  public readonly CollectionCard = CollectionCard;
  public readonly listTitles = signal([{ title: 'fav' }, { title: 'old' }, { title: 'later' }]);

  public onSearch(value: string): void {
    this.searchMovieService
      .searchMovie(value)
      .pipe()
      .subscribe((res) => this.searchResult.set(res.Search));
  }
}
