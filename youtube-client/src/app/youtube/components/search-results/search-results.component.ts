import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { IMovie } from '../../models/movie.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() list!: IMovie[];
}
