import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';
import {of, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthorized: boolean;

  constructor(
    private loginService: AuthorizationService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.isAuthorized = this.loginService.isAuthenticated();

    if (!this.isAuthorized) {
      this.router.navigate(['/login']);
    }

    return of(this.isAuthorized);
  }
}
