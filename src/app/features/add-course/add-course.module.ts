import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AddCourseWindowComponent} from './add-course-window/add-course-window.component';
import {DateComponent} from './date/date.component';
import {DurationComponent} from './duration/duration.component';
import {AuthorsComponent} from './authors/authors.component';

import {PipeModule} from '../../core/pipes/pipe.module';

@NgModule({
  declarations: [AddCourseWindowComponent, DateComponent, DurationComponent, AuthorsComponent],
  exports: [AddCourseWindowComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    PipeModule
  ]
})
export class AddCourseModule {
}
