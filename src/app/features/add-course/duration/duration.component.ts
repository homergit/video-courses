import {Component, EventEmitter, Input, OnInit, ChangeDetectionStrategy, Output, forwardRef} from '@angular/core';
import {ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Course} from 'src/app/core/models/course';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    }
  ]
})
export class DurationComponent implements OnInit, ControlValueAccessor {
  @Input() course: Course;
  @Output() courseDataChanged = new EventEmitter<Course>();

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  writeValue(value): void {}

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  handleChange(event) {
    this.course.length = +event.target.value;
    this.courseDataChanged.emit(this.course);
  }
}
