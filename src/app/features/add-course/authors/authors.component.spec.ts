import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsComponent } from './authors.component';
import { ReactiveFormsModule, FormsModule, ControlContainer, FormBuilder, FormGroup, FormControl, FormGroupDirective } from '@angular/forms';

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  const fg: FormGroup = new FormGroup({
    'author': new FormControl(''),
  });
  const fgd: FormGroupDirective = new FormGroupDirective([], []);
  fgd.form = fg;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsComponent ],
      imports: [
        ReactiveFormsModule, 
        //FormsModule,
      ],
      providers: [
        { provide: ControlContainer, useValue: fgd }, 
        //FormBuilder
      ],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
