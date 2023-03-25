import { Component } from '@angular/core';
import mockDataList from "../../../data/data.json";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent {  
  list = mockDataList.items;
}

