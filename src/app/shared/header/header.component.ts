import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthorizationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isAuthorized: boolean;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private cdr: ChangeDetectorRef
    ) {
    router.events.subscribe(() => {
      this.isAuthorized = this.authService.isAuthenicated();
      this.cdr.detectChanges();
    });
  }

  ngOnInit() {
    this.isAuthorized = this.authService.isAuthenicated();
  }

  logout() {
    this.authService.logout();
    this.isAuthorized = false;
    this.router.navigate(['login']);
  }
}
