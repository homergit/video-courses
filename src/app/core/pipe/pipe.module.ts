import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HoursMinutesPipe} from './hours-minutes.pipe';
import {FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [HoursMinutesPipe, FilterPipe],
  imports: [CommonModule],
  exports: [HoursMinutesPipe, FilterPipe]
})
export class PipeModule {
}
