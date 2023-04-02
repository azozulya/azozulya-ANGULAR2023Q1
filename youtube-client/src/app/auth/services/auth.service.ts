import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userKey = 'youtube-user';
  constructor() { }

  isLoggedIn() {
    return !!localStorage.getItem(this.userKey);
  }

  logIn(login: string, password: string) {
    localStorage.setItem(this.userKey, JSON.stringify({ login, password }));
  }

  logOut() {
    localStorage.removeItem(this.userKey);
  }
}
