import { Component, inject, signal } from '@angular/core';
import { MovieService } from '../../core/services/movies.service';
import { Movie } from '../../core/models/movie.model';
import { Carousel } from '../../shared/components/carousel/carousel';
import { CollectionCard } from './components/collection-card/collection-card';
import { MovieSearch } from '../../../features/movie-search/movie-search';

@Component({
  selector: 'app-landing',
  imports: [MovieSearch, Carousel],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly movieService = inject(MovieService);
  public readonly searchResult = signal<Movie[]>([]);

  public readonly CollectionCard = CollectionCard;
  public readonly listTitles = signal([{ title: 'fav' }, { title: 'old' }, { title: 'later' }]);

  public onSearch(value: string): void {
    this.movieService
      .searchMovie(value)
      .pipe()
      .subscribe((res) => this.searchResult.set(res.Search));
  }
}
