import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ControlContainer} from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent implements OnInit {
  @Input() date: Date;
  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }
}
