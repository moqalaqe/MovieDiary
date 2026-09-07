import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/services/movies.service';
import { DetailsCard } from './components/details-card/details-card';

@Component({
  selector: 'app-movie-details',
  imports: [DetailsCard],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly movieService = inject(MovieService);

  private imdbID = signal<string>('');
  private bgrImg = signal<string>('');
  public movieDetails = signal<any>('');

  public ngOnInit(): void {
    this.imdbID.set(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.movieService
      .fetchMovieDetails(this.imdbID())
      .subscribe((res) => this.movieDetails.set(res));
    this.movieService.getMovieBackground(this.imdbID()).subscribe((res) => this.bgrImg.set(res));
  }

  public get backgroundImage(): string {
    return `url(${this.bgrImg()})`;
  }
}
