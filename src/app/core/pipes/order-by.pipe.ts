import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../models/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Course[], field = 'creationDate'): Course[] {
    if (!Array.isArray(array)) {
      return [];
    }
    array.sort((a: Course, b: Course): number => {
      switch (typeof(a[field])) {
        case 'number' :
          return a[field] - b[field];
        case 'boolean' :
          return b[field] - a[field];
        case 'string' :
          return a[field].localeCompare(b[field]);
        case 'object' :
          return b[field].getTime() - a[field].getTime();
      }
    });
    return array;
  }
}
