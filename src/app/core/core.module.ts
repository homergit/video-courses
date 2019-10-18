import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {CourseModule} from "../course/course.module";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbComponent, UserLoginComponent, PageNotFoundComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    CourseModule,
    RouterModule
  ]
})
export class CoreModule {
}
