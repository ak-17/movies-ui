import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyValueFilter'
})
export class EmptyValueFilterPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length == 0) {
      return "no value"
    }
    return value;
  }

}
