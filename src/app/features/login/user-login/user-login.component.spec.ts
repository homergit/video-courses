import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserLoginComponent} from './user-login.component';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create mock user', () => {
  //   expect(component.mockUser).toEqual({
  //     id: 1,
  //     lastName: 'Serhey',
  //     firstName: 'Ivanov'
  //   });
  // });
});
