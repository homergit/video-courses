import {Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() filterData = new EventEmitter<string>();
  private searchSubject: Subject<string> = new Subject();
  term: string;

  constructor() {}

  ngOnInit() {
    this.searchSubject.pipe(debounceTime(500)).subscribe((searchValue: string) => {
      this.filterData.emit(searchValue);
    });
  }

  search(term: string) {
    this.searchSubject.next(term);
  }

  ngOnDestroy() {
    this.searchSubject.unsubscribe();
  }
}
