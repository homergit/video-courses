import {Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  @Output() filterData = new EventEmitter<string>();
  term: string;

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    this.filterData.emit(this.term);
  }
}
