import { OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
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

  @Output() onChanged = new EventEmitter<string>();

  onSearch(): void {
    //this.onChanged.emit(this.searchString);
    //this.dataService.searchMovies(this.searchString);
    this.router.navigateByUrl(`/main/${this.searchString}`);
  }
}