import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SearchFormComponent {
  searchString: string = '';

  constructor(private dataService: DataService, private router: Router) { }

  onSearch(): void {
    this.dataService.searchMovies(this.searchString);

    if (this.router.url !== '/main')
      this.router.navigateByUrl('main');    
  }
}