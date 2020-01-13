import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatIconModule, MatDialogModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
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
import {LoaderService} from './core/services/loader.service';
import {AuthEffects} from './core/store/auth/effects/auth.effects';
import {CoursesEffects} from './core/store/courses/effects/courses.effects';
import {CoursesReducer} from './core/store/courses/reducers/courses.reducers';
import {AuthReducer} from './core/store/auth/reducers/auth.reducers';
import {CourseFormReducer} from './core/store/course-form/reducers/course-form.reducers';
import {CourseFormEffects} from './core/store/course-form/effects/course-form.effects';

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
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('courses', CoursesReducer),
    EffectsModule.forFeature([CoursesEffects]),
    StoreModule.forFeature('course-form', CourseFormReducer),
    EffectsModule.forFeature([CourseFormEffects]),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthGuard,
    LoaderService,
    AuthEffects,
    CoursesEffects,
    CourseFormEffects,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
