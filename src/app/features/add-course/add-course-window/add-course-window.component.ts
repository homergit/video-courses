import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState, selectCourseFormState} from '../../../core/store/app.states';
import {GetData, SaveData} from '../../../core/store/course-form/actions/course-form.actions';

import {Course} from '../../../core/models/course';
import {CoursesService} from '../../../core/services/courses.service';

@Component({
  selector: 'app-add-course-window',
  templateUrl: './add-course-window.component.html',
  styleUrls: ['./add-course-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseWindowComponent implements OnInit {
  course: Course = {
    id: null,
    name: null,
    description: null,
    date: null,
    duration: null,
    isTopRated: false,
    length: null,
    authors: [{
      id: null,
      name: null,
      lastName: null
    }]
  };
  title: string;
  date: Date;
  duration: number;
  description: string;
  author: string;
  courseForm: FormGroup;

  constructor(
    private courseService: CoursesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public location: Location,
    private store: Store<AppState>,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      duration: ['', Validators.required],
      author: ['', Validators.required]
    });

    this.getCourse();
  }

  get f() { return this.courseForm.controls; }

  getCourse() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(new GetData(id));
      this.store.select(selectCourseFormState).subscribe(data => {
        if (data.course) {
          this.course = data.course;
          this.checkForm();
        }
      });
    } else {
      this.course =  {
        id: null,
        name: null,
        description: null,
        date: null,
        duration: null,
        isTopRated: null,
        length: null,
        authors: [{
          id: null,
          name: null,
          lastName: null
        }]
      };
    }
  }

  checkForm() {
    Object.keys(this.courseForm.controls).forEach(field => {
      const control = this.courseForm.get(field);
      control.updateValueAndValidity();
    });
    this.cdr.detectChanges();
  }

  submitCourse() {
    if (!this.course.id) {
      const date =  new Date();
      this.courseForm.value.date = date.toString();
    }

    this.store.dispatch(new SaveData({value: this.courseForm.value, id: this.course.id}));
  }
}
