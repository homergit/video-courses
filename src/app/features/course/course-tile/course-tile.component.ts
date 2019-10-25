import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../core/models/course';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.scss']
})
export class CourseTileComponent implements OnInit {
  @Input() course: Course;
  @Output() delete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  deleteRequest() {
    this.delete.emit(this.course.id);
  }
}
