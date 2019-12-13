import {Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {ControlContainer} from '@angular/forms';
import {Course} from 'src/app/core/models/course';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent implements OnInit {
  @Input() course: Course;
  @Output() courseDataChanged = new EventEmitter<Course>();

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  handleChange(event) {
    this.course.date = event.target.value;
    this.courseDataChanged.emit(this.course);
  }
}
