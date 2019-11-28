import {Injectable} from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AuthorizationService {
  
  constructor() { }

  login(name: string, pass: string) {
    localStorage.setItem('personalData-name', name);
    localStorage.setItem('personalData-pass', pass);
  }

  logout() {
    localStorage.removeItem('personalData-name');
    localStorage.removeItem('personalData-pass');
  }

  isAuthenicated(): boolean {
    const user = localStorage.getItem('personalData-name');
    return Boolean(user);
  }

  getUserInfo(): string[] {
    const userInfo = [localStorage.getItem('personalData-name'), localStorage.getItem('personalData-pass')];
    return userInfo;
  }
}
