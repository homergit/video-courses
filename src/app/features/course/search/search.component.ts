import {Component, EventEmitter, Output, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('search', {static: false}) searchInput: ElementRef;
  @Output() filterData = new EventEmitter<string>();
  term: string;

  constructor() {}

  ngAfterViewInit() {
    const key = 'srcElement';
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(filter(item => {
        const searchLength = item[key].value.length;
        return searchLength > 2 || !searchLength;
      }))
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe((searchValue: string) => {
        this.filterData.emit(searchValue[key].value);
      });
  }
}
