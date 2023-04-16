import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isHidden = true;

  auth: { userName: string };

  isLogged: boolean = false;

  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.auth = this.authService.auth;
  }

  ngOnInit(): void {
    this.subscription = this.authService.isLogged$.subscribe((status: boolean) => {
      this.isLogged = status;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout(): void {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
}
