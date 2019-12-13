import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
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
      this.courseService
        .getItem(id)
        .subscribe((data: Course) => {
          this.course = data;
          this.checkForm();
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
    if (this.course.id) {
      this.courseService
        .updateItem(this.course)
        .subscribe(() => this.router.navigate(['/courses']));
    } else {
      const date =  new Date();
      this.course.id = date.valueOf();
      this.course.date = date.toString();
      this.course.isTopRated = false;

      this.courseService
        .createCourse(this.course)
        .subscribe(() => this.router.navigate(['/courses']));
    }
  }
}
