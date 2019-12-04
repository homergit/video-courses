import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, ControlContainer, FormGroupDirective, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
  const fg: FormGroup = new FormGroup({
    date: new FormControl(''),
  });
  const fgd: FormGroupDirective = new FormGroupDirective([], []);
  fgd.form = fg;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        {
          provide: ControlContainer,
          useValue: fgd
        },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
