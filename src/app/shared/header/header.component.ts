import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {AuthorizationService} from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthorizationService]
})
export class HeaderComponent implements OnInit {
  isAuthorized: boolean;

  constructor(private authService: AuthorizationService, private router: Router) {
    router.events.subscribe(() => {
      this.isAuthorized = this.authService.isAuthenicated(); 
    });
  }

  ngOnInit() {
    this.isAuthorized = this.authService.isAuthenicated();
  }

  logout() {
    this.authService.logout();
    this.isAuthorized = false;
  }
}
