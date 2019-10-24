import {Component, EventEmitter, Input, OnInit, OnChanges, Output} from '@angular/core';
import {Course} from '../../../core/models/course';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.scss']
})
export class CourseTileComponent implements OnInit, OnChanges {
  @Input() course: Course;
  @Output() delete = new EventEmitter<number>();

  constructor() {
    console.log('**CourseTile - constructor**');
  }

  ngOnInit() {
    console.log('**CourseTile - ngOnInit**');
  }

  ngOnChanges() {
    console.log('**CourseTile - ngOnChanges**');
  }

  deleteRequest() {
    this.delete.emit(this.course.id);
  }

}
