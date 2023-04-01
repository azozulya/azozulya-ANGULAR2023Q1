import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { IMovie } from 'src/app/youtube/models/movie.interface';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})

export class SearchResultsComponent {
  constructor(private dataService: DataService) { }

  @Input() list!: IMovie[];

}

