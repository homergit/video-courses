import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

import {AuthorizationService} from '../services/authorization.service';
import {LoaderService} from '../services/loader.service';

@Injectable()
export class AuthInterceptor {

  constructor(
    private auth: AuthorizationService,
    public loaderService: LoaderService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();

    const isLoginPage = req.url.search('login') !== -1;
    if (!isLoginPage) {
      const authToken = this.auth.getToken();
      req = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });
    }

    return next.handle(req)
      .pipe(finalize(() => this.loaderService.hide()));
  }
}
