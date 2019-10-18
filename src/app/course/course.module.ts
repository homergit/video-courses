import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {AddCourseComponent} from './add-course/add-course.component';
import {ListOfCoursesComponent} from './list-of-courses/list-of-courses.component';
import {CoursesSectionComponent} from './courses-section/courses-section.component';

@NgModule({
  declarations: [SearchComponent, AddCourseComponent, ListOfCoursesComponent, CoursesSectionComponent],
  exports: [
    SearchComponent,
    AddCourseComponent,
    ListOfCoursesComponent,
    CoursesSectionComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CourseModule {
}
