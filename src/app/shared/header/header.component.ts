import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthorized = false; 

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit() {
    this.isAuthorized = this.authService.isAuthenicated();
  }

  logout() {
    this.authService.logout();
    this.isAuthorized = false;
  }

}
