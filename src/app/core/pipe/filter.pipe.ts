import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../models/course';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(data: Array<Course>, term: string): Array<Course> {
    if (!data) {
      return [];
    }
    if (!term) {
      return data;
    }

    return data.filter((item: Course) => JSON.stringify(item).toLowerCase().includes(term.toLowerCase()));
  }
}
