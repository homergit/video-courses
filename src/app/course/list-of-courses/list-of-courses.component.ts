import {Component} from '@angular/core';
import {Course} from "../../core/models/course";

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.scss']
})
export class ListOfCoursesComponent implements Course {
  id: number;
  title: string;
  duration: number;
  creationDate: Date;
  description: string;


  constructor() {
  }

  ngOnInit() {
  }
}
