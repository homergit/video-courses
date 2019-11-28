import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ControlContainer} from '@angular/forms';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsComponent implements OnInit {
  constructor(public controlContainer: ControlContainer) {
  }

  ngOnInit() {
  }
}
