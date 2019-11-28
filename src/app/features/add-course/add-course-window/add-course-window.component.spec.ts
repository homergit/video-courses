import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseWindowComponent } from './add-course-window.component';
import { ControlContainer, ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesService } from '../../course/courses.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddCourseWindowComponent', () => {
  let component: AddCourseWindowComponent;
  let fixture: ComponentFixture<AddCourseWindowComponent>;
  const fg: FormGroup = new FormGroup({
    'title': new FormControl(''),
    'description': new FormControl(''),
  });
  const fgd: FormGroupDirective = new FormGroupDirective([], []);
  fgd.form = fg;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseWindowComponent ],
      imports: [
        ReactiveFormsModule, 
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        //{ provide: ControlContainer, useValue: fgd }, 
        CoursesService,
        ControlContainer
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
