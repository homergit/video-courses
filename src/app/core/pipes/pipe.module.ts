import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {HoursMinutesPipe} from './hours-minutes.pipe';
import {FilterPipe} from './filter.pipe';
import {OrderByPipe} from './order-by.pipe';

@NgModule({
  declarations: [
    HoursMinutesPipe,
    FilterPipe,
    OrderByPipe
  ],
  imports: [CommonModule],
  exports: [
    HoursMinutesPipe,
    FilterPipe,
    OrderByPipe
  ],
  providers: [DatePipe]
})
export class PipeModule {
}
