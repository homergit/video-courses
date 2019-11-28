import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationComponent } from './duration.component';
import { ReactiveFormsModule, FormsModule, ControlContainer, FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipes/pipe.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;
  const fg: FormGroup = new FormGroup({
    'duration': new FormControl(''),
  });
  const fgd: FormGroupDirective = new FormGroupDirective([], []);
  fgd.form = fg;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        PipeModule
      ],
      providers: [
        { provide: ControlContainer, useValue: fgd },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    setTimeout(() => {
      fixture = TestBed.createComponent(DurationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  });
});
