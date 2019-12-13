import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatIconModule, MatDialogModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CourseModule} from './features/course/course.module';
import {SharedModule} from './shared/shared.module';
import {AddCourseModule} from './features/add-course/add-course.module';
import {PipeModule} from './core/pipes/pipe.module';
import {DirectiveModule} from './core/directives/directive.module';
import {AuthGuard} from './core/guards/auth.guard';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './core/interceptors/http-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    SharedModule,
    AddCourseModule,
    PipeModule,
    DirectiveModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
