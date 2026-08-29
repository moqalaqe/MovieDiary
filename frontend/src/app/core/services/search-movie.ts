import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieSearchResponse } from '../models/movie.model';

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
      .set('type', 'movie');

    return this.http.get<MovieSearchResponse>(this.SEARCH_API, { params });
  }
}
