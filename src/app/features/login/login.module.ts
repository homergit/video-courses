import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserLoginComponent} from "./user-login/user-login.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [UserLoginComponent],
  exports: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class LoginModule {
}
