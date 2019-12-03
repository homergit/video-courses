import {Component, EventEmitter, Input, OnInit, ChangeDetectionStrategy, Output} from '@angular/core';
import {ControlContainer} from '@angular/forms';
import {Course} from 'src/app/core/models/course';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {
  @Input() course: Course;
  @Output() courseDataChanged = new EventEmitter<Course>();

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  handleChange(event) {
    this.course.duration = +event.target.value;
    this.courseDataChanged.emit(this.course);
  }
}
