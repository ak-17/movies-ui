import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  itemsInCart: number = 0;

  cartMovies: Movie[];
  
  ngOnInit() {
    this.getMoviesInCart();
  }

  getMoviesInCart(): void {
    this.movieService.inCartMoviesSource$.subscribe(
      cartMovies => {
        this.cartMovies = cartMovies;
        console.log(this.cartMovies)
      }
    );
  }

}
