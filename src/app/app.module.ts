import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CourseModule} from './features/course/course.module';
import {SharedModule} from './shared/shared.module';
import {PipeModule} from './core/pipes/pipe.module';
import {DirectiveModule} from './core/directives/directive.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    SharedModule,
    PipeModule,
    DirectiveModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
