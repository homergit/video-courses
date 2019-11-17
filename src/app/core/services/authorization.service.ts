import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  login(name: string, pass: string) {
    localStorage.setItem('personalData-name', name);
    localStorage.setItem('personalData-pass', pass);
    console.log('login', name);
  }

  logout() {
    localStorage.removeItem('personalData-name');
    localStorage.removeItem('personalData-pass');
    console.log('logout');
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
