import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursMinutes'
})

export class HoursMinutesPipe implements PipeTransform {
  transform(minutes: number): string {
    let formatted = '';
    const hours = Math.floor(minutes / 60);
    const min = Math.floor(minutes) % 60;
    formatted += `${hours}h ${min}min`;

    return formatted;
  }
}
