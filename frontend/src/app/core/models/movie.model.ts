export interface MovieSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieDetails extends Movie {
  Plot: string;
  imdbRating: string;
  Director: string;
  Actors: string;
  Genre: string;
  Runtime: string;
}
