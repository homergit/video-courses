import {Injectable} from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';
import {HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptor {

  constructor(private auth: AuthorizationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const isLoginPage = req.url.search('login') !== -1;
    if (!isLoginPage) {
      const authToken = this.auth.getToken();
      req = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });
    }

    return next.handle(req);
  }
}
