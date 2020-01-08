import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AuthorizationService} from '../../../core/services/authorization.service';
import {CoursesState, selectAuthState} from '../../../core/store/auth/auth.states';
import {LogIn} from '../../../core/store/auth/actions/auth.actions';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  providers: [AuthorizationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  name: string;
  pass: string;
  loading = false;
  submitted = false;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private authService: AuthorizationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<CoursesState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }

    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.submitted = true;
    this.loading = true;

    const credentials = {
      email: this.f.username.value,
      password: this.f.password.value
    };

    this.store.dispatch(new LogIn(credentials));
  }
}
