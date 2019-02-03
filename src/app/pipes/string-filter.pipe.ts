import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie';
@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {

  transform(movies: Movie[], queryPhrase: string): Movie[] {
    if(queryPhrase.length == 0) {
      return movies;
    }
    return movies.filter(movie => movie.movie_title.toLowerCase().startsWith(queryPhrase));
  }

}
