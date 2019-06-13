import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class MovieService {

  constructor(private httpClient: HttpClient) { }

  private movieUrl = 'https://starlord.hackerearth.com/movies';

  private movieJson = 'assets/id-movie-data.json';
  
  inCartmovies: Movie[] = [];

  private inCartMoviesSource = new Subject<Movie[]>();

  inCartMoviesSource$ = this.inCartMoviesSource.asObservable();

  addToCart(movie:Movie):void {
    this.inCartmovies.push(movie);
    this.getCartMovies(); // to update cart count
  }

  removeFromCart(movie:Movie):void {
    this.inCartmovies.splice(this.inCartmovies.indexOf(movie),1);
    this.getCartMovies(); // to update cart count
  }

  getCartMovies():void {
    this.inCartMoviesSource.next(this.inCartmovies);
  }

  getMovies():Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.movieJson);
  }
}
