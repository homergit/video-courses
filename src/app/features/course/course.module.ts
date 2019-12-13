import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';

import {PipeModule} from '../../core/pipes/pipe.module';

import {SearchComponent} from './search/search.component';
import {CoursesSectionComponent} from './courses-section/courses-section.component';
import {CourseTileComponent} from './course-tile/course-tile.component';
import {DirectiveModule} from '../../core/directives/directive.module';
import {DialogComponent} from '../../shared/dialog/dialog.component';
import {CoursesService} from '../../core/services/courses.service';
import {SharedModule} from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CoursesSectionComponent,
  }
];

@NgModule({
  declarations: [
    SearchComponent,
    CoursesSectionComponent,
    CourseTileComponent
  ],
  exports: [
    SearchComponent,
    CoursesSectionComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    PipeModule,
    FormsModule,
    SharedModule,
    DirectiveModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [DialogComponent],
  providers: [CoursesService],
})
export class CourseModule {
}
