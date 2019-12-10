import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthorizationService} from '../../../core/services/authorization.service';

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

  constructor(
    private authService: AuthorizationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    if (this.authService.isAuthenicated) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
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
    this.authService.login(this.f.username.value, this.f.password.value)
      // .pipe(first())
      .subscribe(() => this.router.navigate(['/courses']));

    this.router.navigate(['/courses']);
  }
}
