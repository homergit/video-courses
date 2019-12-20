import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatDialogModule, MatIconModule} from '@angular/material';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DialogComponent} from './dialog/dialog.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';

import {CourseModule} from '../features/course/course.module';
import {LoginModule} from '../features/login/login.module';
import {LoaderComponent} from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DialogComponent,
    BreadcrumbComponent,
    LoaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    BreadcrumbComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ]
})

export class SharedModule {
}
