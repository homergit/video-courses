import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent implements OnInit {
  @Input() courseForm: FormGroup;
  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }
}
