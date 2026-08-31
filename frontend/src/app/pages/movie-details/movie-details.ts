import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchMovie } from '../../core/services/search-movie';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly searchMovieService = inject(SearchMovie);

  private imdbID = signal<string>('');

  public ngOnInit(): void {
    this.imdbID.set(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.searchMovieService.fetchMovieDetails(this.imdbID()).subscribe(console.log);
  }
}
