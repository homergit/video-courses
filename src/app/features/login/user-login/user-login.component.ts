import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../../core/models/user";
import {AuthorizationService} from '../../../core/services/authorization.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  providers: [AuthorizationService]
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  private name: string;
  private pass: string;

  constructor(
    private loginService: AuthorizationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login() {
    console.log('this.name, this.pass', this.name, this.pass)
    this.loginService.login(this.name, this.pass);
    this.router.navigate(['/courses']);
  }
}
