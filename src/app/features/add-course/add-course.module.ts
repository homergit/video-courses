import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AddCourseWindowComponent} from './add-course-window/add-course-window.component';
import {DateComponent} from './date/date.component';
import {DurationComponent} from './duration/duration.component';
import {AuthorsComponent} from './authors/authors.component';

import {PipeModule} from '../../core/pipes/pipe.module';

const routes: Routes = [
  {
    path: '',
    component: AddCourseWindowComponent,
  }
];

@NgModule({
  declarations: [AddCourseWindowComponent, DateComponent, DurationComponent, AuthorsComponent],
  exports: [
    AddCourseWindowComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    RouterModule.forChild(routes)
  ]
})
export class AddCourseModule {
}
