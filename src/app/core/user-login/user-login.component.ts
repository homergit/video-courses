import {Component} from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements User {
  id: number;
  lastName: string;
  firstName: string;

  constructor() {
  }

  ngOnInit() {
  }
}
