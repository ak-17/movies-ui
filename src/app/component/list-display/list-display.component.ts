import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Movie[];
  loading: boolean = true;
  searchText: string ="";
  noOfMovies: number;
  ngOnInit() {
    this.getMovies();
  }

  getMovies():void {
    this.movieService.getMovies().subscribe( data => {
      this.movies = data;
      if(this.movies.length > 0) {
        console.log("movies sucessfully loaded");
        this.noOfMovies = this.movies.length;
        this.loading = false;
      }
    })
  }
}
