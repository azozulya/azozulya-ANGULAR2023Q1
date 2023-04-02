import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn())
      this.router.navigateByUrl('main');
  }

  getErrorMessage() {
    if (this.login.hasError('required') || this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }

  onLogin() {
    if (this.login.value && this.password.value) {
      this.authService.logIn(this.login.value, this.password.value);
      this.router.navigateByUrl('main');
    }
  }
}
