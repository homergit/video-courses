import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseRelevanceDirective} from './course-relevance.directive';

@NgModule({
  declarations: [CourseRelevanceDirective],
  imports: [CommonModule],
  exports: [CourseRelevanceDirective]
})
export class DirectiveModule { }
