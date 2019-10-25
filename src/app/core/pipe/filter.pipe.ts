import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../models/course';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(data: Course[], term: string): Course[] {
    if (!data) {
      return [];
    }
    if (!term) {
      return data;
    }

    return data.filter((item: Course) => {
      return JSON.stringify(item)
                 .toLowerCase().trim()
                 .includes(term.toLowerCase().trim());
    });
  }
}
