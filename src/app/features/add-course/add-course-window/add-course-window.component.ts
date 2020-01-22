import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
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
  courseForm: FormGroup;

  constructor(
    private courseService: CoursesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public location: Location,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required]],
      length: ['', [Validators.required]],
      authors: [this.course.authors[0].name, [Validators.required]]
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

          this.courseForm.controls.name.patchValue(this.course.name);
          this.courseForm.controls.description.patchValue(this.course.description);
          this.courseForm.controls.date.patchValue(this.course.date);
          this.courseForm.controls.length.patchValue(this.course.length);
          this.courseForm.controls.authors.patchValue(this.course.authors);
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
        authors: null
      };
    }
  }

  submitCourse() {
    if (!this.course.id) {
      const date =  new Date();
      this.courseForm.value.date = date.toString();
    }

    this.store.dispatch(new SaveData({value: this.courseForm.value, id: this.course.id}));
  }
}
