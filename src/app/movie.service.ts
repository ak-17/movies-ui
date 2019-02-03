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
  
  private inCartItemsSource = new Subject<number>();

  inCartItems$ = this.inCartItemsSource.asObservable(); // observable for inCartItems
  
  movieIds: number[] = [];



  addToCart(id:number):void {
    this.movieIds.push(id);
    this.getNoOfCartItems(); // to update cart count
  }

  removeFromCart(id:number):void {
    this.movieIds.splice(this.movieIds.indexOf(id),1);
    this.getNoOfCartItems(); // to update cart count
  }

  getCartItems():number[] {
    return this.movieIds;
  }

  getNoOfCartItems():void {
    this.inCartItemsSource.next(this.movieIds.length);
  }

  getMovies():Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.movieJson);
  }
}
