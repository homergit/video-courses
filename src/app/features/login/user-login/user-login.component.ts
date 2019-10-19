import {Component, OnInit} from '@angular/core';
import {User} from "../../../core/models/user";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  mockUser: User = {
    id: 1,
    lastName: 'Serhey',
    firstName: 'Ivanov'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
