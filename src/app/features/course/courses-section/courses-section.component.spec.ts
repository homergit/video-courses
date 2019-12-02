import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialog} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { of } from 'rxjs';

import {CoursesSectionComponent} from './courses-section.component';
import {PipeModule} from '../../../core/pipes/pipe.module';
import {BreadcrumbComponent} from '../../../shared/breadcrumb/breadcrumb.component';
import {SearchComponent} from '../search/search.component';
import {CourseTileComponent} from '../course-tile/course-tile.component';
import {DirectiveModule} from '../../../core/directives/directive.module';
import {CoursesService} from '../courses.service';


export class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
}

describe('SectionComponent', () => {
  let component: CoursesSectionComponent;
  let fixture: ComponentFixture<CoursesSectionComponent>;
  let coursesServiceSpy: jasmine.SpyObj<CoursesService>;
  let dialog: MatDialog;
  const mockMatDialog = {
    afterClosed: (): void => undefined,
    open: (): void => undefined,
  };

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CoursesService', ['getList']);

    TestBed.configureTestingModule({
      declarations: [
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
      providers: [
        {provide: CoursesService, useValue: spy},
        { provide: MatDialog, useClass: MatDialogMock }
      ]
    })
      .compileComponents();

    coursesServiceSpy = TestBed.get(CoursesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set a new term and value for shouldShowLoadMore', () => {
    let stubValue = [
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
    coursesServiceSpy.getList.and.returnValue(stubValue);

    component.courses = [
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

  it('should open the dialog', () => {
    let deletedItem = {
      id: 1,
      title: 'Title',
      duration: 123,
      creationDate: new Date(2019, 10, 29, 1, 10),
      description: 'Hello',
      isTopRated: true
    };

    component.delete(deletedItem);

    spyOn(component.dialog, 'open')
      .and
      .returnValue({afterClosed: () => of(true)} as any);

    component.delete(deletedItem);
    expect(component.dialogRef).toBeDefined();
  });
});
