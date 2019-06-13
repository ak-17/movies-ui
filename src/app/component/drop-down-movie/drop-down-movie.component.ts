import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-drop-down-movie',
  templateUrl: './drop-down-movie.component.html',
  styleUrls: ['./drop-down-movie.component.scss']
})
export class DropDownMovieComponent implements OnInit {

  constructor() { }

  @Input() cartMovies: Movie[];

  ngOnInit() {
  }

}
