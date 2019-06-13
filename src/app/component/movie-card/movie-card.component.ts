import { Component, EventEmitter, OnInit, Input,Output} from '@angular/core';
import { MovieService} from '../../movie.service';
import { Movie } from '../../movie';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  genres = [];

  isDisabled: boolean = false;

  @Input('movie') movie: Movie

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.genres = this.movie.genres.split("|",4);
  }

  addToCart():void {
    this.isDisabled = true;
    this.movieService.addToCart(this.movie);
    console.log(this.movie.movie_title + "added to cart")
  }

  removeFromCart():void {
    this.isDisabled = false;
    this.movieService.removeFromCart(this.movie);
    console.log(this.movie.movie_title + "removed from cart")
  }

}
