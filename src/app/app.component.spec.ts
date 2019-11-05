import {async, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {BreadcrumbComponent} from './features/course/breadcrumb/breadcrumb.component';
import {SearchComponent} from './features/course/search/search.component';
import {CourseTileComponent} from './features/course/course-tile/course-tile.component';
import {CoursesSectionComponent} from './features/course/courses-section/courses-section.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PipeModule} from './core/pipes/pipe.module';
import {DirectiveModule} from './core/directives/directive.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        PipeModule,
        DirectiveModule
      ],
      declarations: [
        AppComponent,
        BreadcrumbComponent,
        SearchComponent,
        CourseTileComponent,
        CoursesSectionComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
