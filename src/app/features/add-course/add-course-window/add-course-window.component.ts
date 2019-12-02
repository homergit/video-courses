import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import {Course} from '../../../core/models/course';
import {CoursesService} from '../../course/courses.service';

@Component({
  selector: 'app-add-course-window',
  templateUrl: './add-course-window.component.html',
  styleUrls: ['./add-course-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseWindowComponent implements OnInit {
  course: Course | null;
  formValue: {
    title: string;
    date: string;
    duration: number;
    description: string;
    author: string;
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

    this.courseForm.valueChanges.subscribe(value => {
      this.formValue = value;
    });

    this.getCourse();
    this.checkForm();
    this.cdr.detectChanges();
  }

  get f() { return this.courseForm.controls; }

  getCourse() {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.course = this.courseService.getItem(id);
      this.title = this.course.title;
      this.duration = this.course.duration;
      this.description = this.course.description;
      this.date = this.course.creationDate;
    }
  }

  checkForm() {
    Object.keys(this.courseForm.controls).forEach(field => {
      const control = this.courseForm.get(field);
      control.updateValueAndValidity();
    });
  }

  resetForm() {
      this.title = null;
      this.duration = null;
      this.description = null;
      this.date = null;
      this.author = null;
  }

  submitCourse() {
    this.cdr.detectChanges();
    if(this.course) {
      this.course.title = this.title;
      this.course.duration = this.duration;
      this.course.description = this.description;
        
      this.courseService.updateItem(this.course);
    } else {
      this.course = {
        id: new Date().valueOf(),
        title: this.title,
        creationDate: new Date(),
        duration: this.formValue.duration,
        description: this.description,
        isTopRated: false
      };
      this.courseService.createCourse(this.course);
    }

    this.resetForm();
    this.router.navigate(['/courses']);
  }
}
