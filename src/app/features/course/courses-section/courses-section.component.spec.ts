import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesSectionComponent} from './courses-section.component';
import {PipeModule} from '../../../core/pipes/pipe.module';
import {BreadcrumbComponent} from '../breadcrumb/breadcrumb.component';
import {SearchComponent} from '../search/search.component';
import {CourseTileComponent} from '../course-tile/course-tile.component';
import {FormsModule} from '@angular/forms';
import {DirectiveModule} from '../../../core/directives/directive.module';


describe('SectionComponent', () => {
  let component: CoursesSectionComponent;
  let fixture: ComponentFixture<CoursesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesSectionComponent,
        BreadcrumbComponent,
        SearchComponent,
        CourseTileComponent,
        CoursesSectionComponent,
      ],
      imports: [
        PipeModule,
        FormsModule,
        DirectiveModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set a new term and value for shouldShowLoadMore', () => {
    component.mockCourses = [
      {
        id: 1,
        title: 'Title',
        duration: 123,
        creationDate: new Date(),
        description: 'Hello',
        isTopRated: true
      },
      {
        id: 2,
        title: 'Title2',
        duration: 123,
        creationDate: new Date(),
        description: 'Text',
        isTopRated: true
      }
    ];

    component.filterData('hello');
    expect(component.term).toEqual('hello');
    expect(component.shouldShowLoadMore).toEqual(false);
  });

  it('should filter data by id', () => {
    component.coursesToDisplay = [
      {
        id: 1,
        title: 'Title',
        duration: 123,
        creationDate: new Date(2019, 10, 29, 1, 10),
        description: 'Hello',
        isTopRated: true
      },
      {
        id: 2,
        title: 'Title2',
        duration: 123,
        creationDate: new Date(2019, 10, 29, 1, 10),
        description: 'Text',
        isTopRated: true
      }
    ];

    component.delete(1);
    expect(component.coursesToDisplay).toEqual([{
      id: 2,
      title: 'Title2',
      duration: 123,
      creationDate: new Date(2019, 10, 29, 1, 10),
      description: 'Text',
      isTopRated: true
    }]);
  });
});
