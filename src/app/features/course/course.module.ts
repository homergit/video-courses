import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PipeModule} from '../../core/pipes/pipe.module';

import {SearchComponent} from './search/search.component';
import {CoursesSectionComponent} from './courses-section/courses-section.component';
import {CourseTileComponent} from './course-tile/course-tile.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {DirectiveModule} from '../../core/directives/directive.module';

@NgModule({
  declarations: [SearchComponent, CoursesSectionComponent, CourseTileComponent, BreadcrumbComponent],
  exports: [
    SearchComponent,
    CoursesSectionComponent,
  ],
  imports: [
    CommonModule,
    PipeModule,
    FormsModule,
    DirectiveModule
  ]
})
export class CourseModule {
}
