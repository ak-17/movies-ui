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

  @Input('movie') movie: Movie

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.genres = this.movie.genres.split("|",4);
  }

  moreDetail():void {
    console.log(this.movie.img_address);
  }
  //src="../../../assets/movie-icon.png
}
