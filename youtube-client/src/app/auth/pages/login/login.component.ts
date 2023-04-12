import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authForm: FormGroup = new FormGroup({
    login: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  get login(): FormControl<string> {
    return this.authForm.get('login') as FormControl<string>;
  }

  get password(): FormControl<string> {
    return this.authForm.get('password') as FormControl<string>;
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.router.navigateByUrl('main');
  }

  onLogin(): void {
    this.authService.logIn(this.login.value, this.password.value);
    this.router.navigateByUrl('main');
  }
}
