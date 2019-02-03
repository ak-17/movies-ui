import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  private movieUrl = 'https://starlord.hackerearth.com/movies';

  private movieJson = 'assets/movie-data.json';

  private modifiedMovieJson = 'assets/modified-movie-data.json';
  
  getMovies():Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.modifiedMovieJson);
  }
}
