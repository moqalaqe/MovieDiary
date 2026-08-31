import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, from, map, Observable, switchMap, tap } from 'rxjs';
import { Movie, MovieSearchResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class SearchMovie {
  private readonly SEARCH_API = 'https://www.omdbapi.com/';
  private readonly API_KEY = '841a7f49';

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
  private fanartApiKey = 'fe6496f4d9d460e806fb900052fc4272';
  private fanartBaseUrl = 'https://webservice.fanart.tv/v3/movies';

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
}
