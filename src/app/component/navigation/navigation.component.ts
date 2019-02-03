import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  itemsInCart: number = 0;

  ngOnInit() {
    this.getNoOfItemsInCart();
  }

  getNoOfItemsInCart(): void {
    this.movieService.inCartItems$.subscribe(
      itemCount => {
        this.itemsInCart = itemCount;
      }
    );
  }

}
