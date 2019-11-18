import {Injectable} from '@angular/core';
// // import {LoginModule} from './login.module';

@Injectable()
export class AuthorizationService {
  isAuthenicated1 = false;

  constructor() { }

  login(name: string, pass: string) {
    localStorage.setItem('personalData-name', name);
    localStorage.setItem('personalData-pass', pass);
    console.log('login', name);
    this.isAuthenicated1 = true;
  }

  logout() {
    localStorage.removeItem('personalData-name');
    localStorage.removeItem('personalData-pass');
    console.log('logout');
    this.isAuthenicated1 = false;
  }

  isAuthenicated(): boolean {
    const user = localStorage.getItem('personalData-name');
    return Boolean(user);
  }

  getUserInfo(): string[] {
    return [
      JSON.parse(localStorage.getItem('personalData-name')),
      JSON.parse(localStorage.getItem('personalData-pass'))
    ]
  }
}
