import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

import {Course} from '../../../core/models/course';
import {CoursesService} from '../../course/courses.service';

@Component({
  selector: 'app-add-course-window',
  templateUrl: './add-course-window.component.html',
  styleUrls: ['./add-course-window.component.scss']
})
export class AddCourseWindowComponent implements OnInit {
  course: Course;
  formValue: {
    title: string;
    date: string;
    duration: number;
    description: string;
    author: string;
  };
  title: string;
  date: string;
  duration: number;
  description: string;
  author: string;
  courseForm: FormGroup;

  constructor(
    private courseService: CoursesService,
    private formBuilder: FormBuilder,
    private router: Router,
    public location: Location
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
  }

  get f() { return this.courseForm.controls; }

  submitCourse() {
    this.course = {
      id: 12,
      title: this.title,
      creationDate: new Date(),
      duration: this.formValue.duration,
      description: this.description,
      isTopRated: false
    };
    this.courseService.createCourse(this.course);
    this.router.navigate(['/courses']);
  }
}
