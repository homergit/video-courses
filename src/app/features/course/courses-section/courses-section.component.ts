import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {Course, DeletedItem} from '../../../core/models/course';
import {FilterPipe} from '../../../core/pipes/filter.pipe';
import {CoursesService} from '../../../core/services/courses.service';
import {DialogComponent} from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesSectionComponent implements OnInit {
  numberOfCoursesToLoad = 0;
  shouldShowLoadMore = true;
  term: string;
  courses: Course[] = [];
  dialogRef: any;
  //filterPipe = new FilterPipe();

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.coursesService.getList(this.numberOfCoursesToLoad)
      .subscribe((data: Course[]) => {
        if (Array.isArray(data) && data.length) {
          this.courses = this.courses.concat(data);
        } else {
          this.shouldShowLoadMore = false;
        }
        this.cdr.detectChanges();
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
        this.coursesService.removeItem(course.id).subscribe();
        this.courses = this.courses.filter(item => item.id !== course.id);
        this.cdr.detectChanges();
      }
    });
  }

  loadCourses() {
    this.numberOfCoursesToLoad += 3;
    this.getCourses();
  }

  filterData(term: string) {
    //this.term = term;
    if(term.length > 3){
      this.coursesService.searchCourses(term).subscribe(items => this.courses = items);
    }
    this.coursesService.searchCourses(term).subscribe(items => this.courses = items);
    //this.courses = this.filterPipe.transform(this.courses, this.term);
    this.cdr.detectChanges();
  }
}
