import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  forwardRef,
  Output,
  EventEmitter
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CoursesService} from '../../../core/services/courses.service';
import {Course} from '../../../core/models/course';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AuthorsComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => AuthorsComponent),
        multi: true
    }]
})
export class AuthorsComponent implements OnInit, ControlValueAccessor {
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  authorCtrl = new FormControl();
  filteredAuthors: Observable<string[]>;
  authors: [{name: string, lastName: string}];
  allAuthors: any;

  @Input() course: Course;
  @Output() courseDataChanged = new EventEmitter<Course>();
  @ViewChild('authorInput', {static: false}) authorInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  constructor(
    private coursesService: CoursesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.coursesService.getAuthors().subscribe((data: any) => {
      this.allAuthors = data.map(a => a.name);
      this.filteredAuthors = this.authorCtrl.valueChanges.pipe(
        startWith(null),
        map((author: string | null) => author ? this.filterAuthors(author) : this.allAuthors));

      this.cdr.markForCheck();
      this.cdr.detectChanges();
    });
  }

  writeValue(value): void {}

  onChange: any = () => {};
  onTouched: any = () => {};

  validate({ value }: FormControl) {}

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  addAuthor(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value.split(' ');

      if ((value[0] || '')) {
        value[1] = value[1] || '';

        if (!this.course.authors) {
          this.course.authors = [{name: value[0], lastName: value[1], id: 0}];
        } else {
          this.course.authors.push({name: value[0], lastName: value[1], id: 0});
        }

        this.courseDataChanged.emit(this.course);
        this.onChange(this.course.authors);
        this.onTouched(this.course.authors);
        this.cdr.markForCheck();
      }

      if (input) {
        input.value = '';
      }

      this.authorCtrl.setValue(null);
    }
  }

  remove(author: any): void {
    const index = this.course.authors.indexOf(author);

    if (index >= 0) {
      this.course.authors.splice(index, 1);
    }

    this.courseDataChanged.emit(this.course);
    this.onChange(this.course.authors);
    this.onTouched(this.course.authors);
    this.cdr.markForCheck();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.value.split(' ');

    if (!this.course.authors) {
      this.course.authors = [{name: value[0], lastName: value[1], id: 0}];
    } else {
      this.course.authors.push({name: value[0], lastName: value[1], id: 0});
    }

    this.courseDataChanged.emit(this.course);
    this.onChange(this.course.authors);
    this.onTouched(this.course.authors);
    this.cdr.markForCheck();
  }

  private filterAuthors(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allAuthors.filter(author => author.toLowerCase().indexOf(filterValue) === 0);
  }
}
