import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Course, DeletedItem} from '../../../core/models/course';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseTileComponent {
  @Input() course: Course;
  @Output() delete = new EventEmitter<DeletedItem>();

  constructor() {
  }

  deleteRequest() {
    const deletedItem = {
      id: this.course.id,
      title: this.course.title
    };
    this.delete.emit(deletedItem);
  }
}
