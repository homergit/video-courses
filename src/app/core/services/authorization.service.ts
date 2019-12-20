import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  currentUserSubject: BehaviorSubject<string>;
  currentUser: Observable<string>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): Observable<string> {
    return this.currentUser;
  }

  login(name: string, pass: string) {
    return this.http.post<any>(`http://localhost:3004/auth/login`, {login: name, password: pass})
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', user.token);
          this.currentUserSubject.next(user.token);
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    const user = localStorage.getItem('currentUser');
    return !!user;
  }

  getToken(): string {
    const user = localStorage.getItem('currentUser');
    return user;
  }

  getUserInfo(token) {
    return this.http.post<any>(`http://localhost:3004/auth/userinfo`, {token});
  }
}
