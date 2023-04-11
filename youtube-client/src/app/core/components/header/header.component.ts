import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataService } from '../../services/data.service';
import { IState } from 'src/app/youtube/models/state.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isHidden = true;

  state!: IState;

  auth: { userName: string };

  isLogged: boolean = false;

  private subscription: Subscription;

  constructor(private dataService: DataService, private authService: AuthService, private router: Router) {
    this.state = this.dataService.state;
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

  onFilterList(filterTag: string): void {
    this.state.filter = filterTag;
  }

  onLogout(): void {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
}
