import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {Course, DeletedItem} from '../../../core/models/course';
import {FilterPipe} from '../../../core/pipes/filter.pipe';
import {OrderByPipe} from '../../../core/pipes/order-by.pipe';
import {CoursesService} from "../courses.service";
import {DialogComponent} from "../../../shared/dialog/dialog.component";

@Component({
  selector: 'app-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.scss'],
  providers: [CoursesService]
})
export class CoursesSectionComponent implements OnInit {
  coursesToDisplay: Course[] = [];
  numberOfCoursesToLoad = 5;
  shouldShowLoadMore = true;
  term: string;
  orderByPipe = new OrderByPipe();
  filterPipe = new FilterPipe();
  courses: Course[];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ){}

  ngOnInit() {
    this.courses = this.orderByPipe.transform(this.coursesService.getList());
    this.loadCourses();
  }

  delete(course: DeletedItem) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        text: course.title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.coursesToDisplay = this.coursesService.removeItem(course.id);
      }
    });
  }

  loadCourses() {
    const loadedCourses = this.courses.slice(this.numberOfCoursesToLoad - 5, this.numberOfCoursesToLoad);
    this.coursesToDisplay = this.coursesToDisplay.concat(loadedCourses);
    this.shouldShowLoadMore = this.numberOfCoursesToLoad <= this.courses.length;
    this.numberOfCoursesToLoad += 5;
  }

  filterData(term: string) {
    this.term = term;
    this.shouldShowLoadMore = this.numberOfCoursesToLoad <= this.filterPipe.transform(this.courses, term).length;
  }
}
