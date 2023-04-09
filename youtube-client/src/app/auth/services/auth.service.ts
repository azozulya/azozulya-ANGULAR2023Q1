import { Injectable } from '@angular/core';
import { ILogin } from '../models/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userKey = 'youtube-user';

  auth = {
    isLogged: false,
    userName: '',
  };

  constructor() {
    const userData = localStorage.getItem(this.userKey);
    if (userData) {
      const user: ILogin = JSON.parse(userData);
      this.auth = { isLogged: true, userName: user.login };
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.userKey);
  }

  logIn(login: string, password: string): void {
    localStorage.setItem(this.userKey, JSON.stringify({ login, password }));
    this.auth.isLogged = true;
    this.auth.userName = login;
  }

  logOut(): void {
    localStorage.removeItem(this.userKey);
    this.auth.isLogged = false;
    this.auth.userName = '';
  }
}
