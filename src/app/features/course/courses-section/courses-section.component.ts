import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {Course, DeletedItem} from '../../../core/models/course';
import {FilterPipe} from '../../../core/pipes/filter.pipe';
import {OrderByPipe} from '../../../core/pipes/order-by.pipe';
import {CoursesService} from '../courses.service';
import {DialogComponent} from '../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.scss'],
})
export class CoursesSectionComponent implements OnInit {
  coursesToDisplay: Course[] = [];
  numberOfCoursesToLoad = 0;
  shouldShowLoadMore = true;
  term: string;
  orderByPipe = new OrderByPipe();
  filterPipe = new FilterPipe();
  courses: Course[];
  dialogRef: any;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ){}

  ngOnInit() {
    this.courses = this.orderByPipe.transform(this.coursesService.getList());
    this.loadCourses();
  }

  delete(course: DeletedItem) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        text: course.title
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.courses = this.coursesService.removeItem(course.id);
        this.coursesToDisplay = this.courses.slice(0, this.numberOfCoursesToLoad);
      }
    });
  }

  loadCourses() {
    const loadedCourses = this.courses.slice(this.numberOfCoursesToLoad, this.numberOfCoursesToLoad + 5);
    this.numberOfCoursesToLoad += 5;

    this.coursesToDisplay = this.coursesToDisplay.concat(loadedCourses);
    this.shouldShowLoadMore = this.numberOfCoursesToLoad <= this.courses.length;
  }

  filterData(term: string) {
    const filteredCourses = this.filterPipe.transform(this.courses, term);
    this.term = term;

    this.shouldShowLoadMore = this.numberOfCoursesToLoad <= filteredCourses.length;
    this.coursesToDisplay = filteredCourses.slice(0, this.numberOfCoursesToLoad);
  }
}
