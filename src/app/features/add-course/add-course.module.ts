import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ]
})
export class AddCourseModule {
}
