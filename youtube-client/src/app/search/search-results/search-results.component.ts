import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { IMovie } from 'src/models/search.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent {  
  constructor(){}

  @Input() list!: IMovie[];   
}

