import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchComponent} from './search/search.component';
import {CoursesSectionComponent} from './courses-section/courses-section.component';
import {PipeModule} from '../../core/pipe/pipe.module';
import {CourseTileComponent} from './course-tile/course-tile.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SearchComponent, CoursesSectionComponent, CourseTileComponent],
  exports: [
    SearchComponent,
    CoursesSectionComponent,
  ],
  imports: [
    CommonModule,
    PipeModule,
    FormsModule
  ]
})
export class CourseModule {
}
