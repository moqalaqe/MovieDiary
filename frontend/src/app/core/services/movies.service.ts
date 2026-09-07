import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, from, map, Observable, switchMap, tap } from 'rxjs';
import { Movie, MovieSearchResponse } from '../models/movie.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly SEARCH_API = environment.SEARCH_MOVIE_API;
  private readonly API_KEY = environment.SEARCH_MOVIE_API_KEY;
  private readonly fanartApiKey = environment.FAN_ART_API_KEY;
  private readonly fanartBaseUrl = environment.FAN_ART_API;

  private readonly http = inject(HttpClient);

  public searchMovie(value: string): Observable<MovieSearchResponse> {
    const params = new HttpParams()
      .set('apikey', this.API_KEY)
      .set('s', value)
      .set('type', 'movie')
      .set('page', 1);

    return this.http.get<MovieSearchResponse>(this.SEARCH_API, { params });
  }

  public fetchMovieDetails(imdbID: string): Observable<Movie> {
    const params = new HttpParams().set('apikey', this.API_KEY).set('i', imdbID);

    return this.http.get<Movie>(this.SEARCH_API, { params });
  }

  public getMovieBackground(imdbId: string): Observable<string> {
    const url = `${this.fanartBaseUrl}/${imdbId}?api_key=${this.fanartApiKey}`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        if (response.moviebackground && response.moviebackground.length > 0) {
          return response.moviebackground[0].url;
        }
        return 'assets/images/default-backdrop.jpg';
      }),
    );
  }

  public saveMovie(value: any): void {
    console.log(value);
  }
}
