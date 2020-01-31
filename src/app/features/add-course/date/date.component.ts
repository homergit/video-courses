import {Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter, forwardRef} from '@angular/core';
import {ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Course} from 'src/app/core/models/course';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    }
  ]
})
export class DateComponent implements OnInit, ControlValueAccessor {
  @Input() course: Course;
  @Output() courseDataChanged = new EventEmitter<Course>();

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  writeValue(value): void {
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  handleChange(event) {
    this.course.date = event.target.value;
    this.courseDataChanged.emit(this.course);
  }
}
