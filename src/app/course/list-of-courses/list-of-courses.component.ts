import {Component, OnInit} from '@angular/core';
import {Course} from "../../core/models/course";

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.scss']
})
export class ListOfCoursesComponent implements OnInit {
  mockCourse: Course = {
    id: 1,
    title: 'Title',
    duration: 12,
    creationDate: new Date(),
    description: 'description'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
