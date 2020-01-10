import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

import {Course, DeletedItem} from '../../../core/models/course';
import {CoursesService} from '../../../core/services/courses.service';
import {DialogComponent} from '../../../shared/dialog/dialog.component';
import {AppState, selectCoursesState} from '../../../core/store/app.states';
import {DeleteItem, ListRequest, LoadMoreRequest} from '../../../core/store/courses/actions/courses.actions';

@Component({
  selector: 'app-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesSectionComponent implements OnInit, OnDestroy {
  numberOfCoursesToLoad = 0;
  shouldShowLoadMore: boolean;
  term: string;
  courses: Course[];
  coursesToDisplay: Course[];
  dialogRef: any;
  getCoursesSubscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new ListRequest(this.numberOfCoursesToLoad));
    this.getCourses();
  }

  ngOnDestroy() {
    this.getCoursesSubscription.unsubscribe();
  }

  getCourses() {
    this.getCoursesSubscription = this.store.select(selectCoursesState)
      .subscribe((data) => {
        if (data.courses) {
          this.shouldShowLoadMore = !this.courses || (this.numberOfCoursesToLoad - data.courses.length) < 3;
          this.courses = data.courses;
          this.coursesToDisplay = this.courses.slice();
        }

        if (!this.cdr['destroyed']) {
          this.cdr.detectChanges();
        }
      });
  }

  delete(course: DeletedItem) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        text: course.name
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new DeleteItem(course.id));
        this.cdr.detectChanges();
      }
    });
  }

  loadCourses() {
    this.numberOfCoursesToLoad += 3;
    this.store.dispatch(new LoadMoreRequest(this.numberOfCoursesToLoad));
  }

  filterData(term: string) {
    if (term) {
      this.coursesService.searchCourses(term).subscribe(items => this.courses = items);
      this.shouldShowLoadMore = false;
    } else {
      this.courses = this.coursesToDisplay;
      this.shouldShowLoadMore = true;
    }

    this.cdr.detectChanges();
  }
}
