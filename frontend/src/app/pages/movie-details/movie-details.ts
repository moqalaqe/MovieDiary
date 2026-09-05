import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchMovie } from '../../core/services/search-movie';
import { DetailsCard } from './components/details-card/details-card';

@Component({
  selector: 'app-movie-details',
  imports: [DetailsCard],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly searchMovieService = inject(SearchMovie);

  private imdbID = signal<string>('');
  private bgrImg = signal<string>('');
  public movieDetails = signal<any>('');

  public ngOnInit(): void {
    this.imdbID.set(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.searchMovieService
      .fetchMovieDetails(this.imdbID())
      .subscribe((res) => this.movieDetails.set(res));
    this.searchMovieService
      .getMovieBackground(this.imdbID())
      .subscribe((res) => this.bgrImg.set(res));
  }

  public get backgroundImage(): string {
    return `url(${this.bgrImg()})`;
  }
}
