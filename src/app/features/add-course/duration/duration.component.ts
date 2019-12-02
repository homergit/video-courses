import {Component, EventEmitter, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {
  @Input() duration: number;

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  handleChange(event) {
    this.duration = +event.target.value;
  }
}
