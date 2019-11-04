import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../../../core/models/course';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.scss']
})
export class CourseTileComponent {
  @Input() course: Course;
  @Output() delete = new EventEmitter<number>();

  constructor() {
  }

  deleteRequest() {
    this.delete.emit(this.course.id);
  }
}
