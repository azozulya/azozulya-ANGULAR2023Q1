import { Injectable } from '@angular/core';
import { ILogin } from '../models/login.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userKey = 'youtube-user';

  auth = {
    userName: '',
  };

  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    const userData = localStorage.getItem(this.userKey);

    if (userData) {
      const user: ILogin = JSON.parse(userData);
      this.auth = { userName: user.login };
      this.isLogged$.next(true);
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.userKey);
  }

  logIn(login: string, password: string): void {
    localStorage.setItem(this.userKey, JSON.stringify({ login, password }));
    this.auth.userName = login;
    this.isLogged$.next(true);
  }

  logOut(): void {
    localStorage.removeItem(this.userKey);
    this.auth.userName = '';
    this.isLogged$.next(false);
  }
}
