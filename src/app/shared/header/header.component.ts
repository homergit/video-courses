import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AuthorizationService} from 'src/app/core/services/authorization.service';
import {User} from '../../core/models/user';
import {CoursesState} from '../../core/store/auth/auth.states';
import {LogOut} from '../../core/store/auth/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthorizationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isAuthorized: boolean;
  userToken: string;
  user: User;

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private store: Store<CoursesState>
  ) {}

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.userToken = this.authService.getToken();
        this.isAuthorized = !!this.userToken;

        if (this.isAuthorized) {
          this.authService.getUserInfo(this.userToken).subscribe(user => {
            this.user = user;
            this.cdr.detectChanges();
          });
        }
      }
    });
  }

  logout() {
    this.store.dispatch(new LogOut());
    this.router.navigate(['login']);
  }
}
