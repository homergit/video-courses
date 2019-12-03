import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate   {
  constructor(
    private loginService: AuthorizationService,
    private router: Router
  ) {}

    canActivate() {
        if (this.loginService.isAuthenicated()) {
          return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
