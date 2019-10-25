import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {CourseModule} from '../features/course/course.module';
import {LoginModule} from '../features/login/login.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CourseModule,
    LoginModule,
    RouterModule
  ]
})

export class SharedModule {
}
