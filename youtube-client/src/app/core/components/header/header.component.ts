import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DataService } from '../../services/data.service';
import { IState } from 'src/app/youtube/models/state.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  isHidden = true;
  state!: IState;
  auth: { isLogged: boolean; userName: string };

  constructor(private dataService: DataService, private authService: AuthService, private router: Router) {
    this.state = this.dataService.state;
    this.auth = this.authService.auth;
  } 

  onFilterList(filterTag: string) {
    this.state.filter = filterTag;
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
}
