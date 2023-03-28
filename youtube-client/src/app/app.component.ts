import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { IMovie } from 'src/models/search.interface';
import { IState } from 'src/models/state.interface';

import mockDataList from "../data/data.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent { 
  title = 'youtube-client';
  currentSort!: Sort;
  filterTag!: string;
  list!: IMovie[];
  isShowNotFindMessage = false;

  onDataChanged(state: IState){  
    if(!state.search) return;

    const searchResult = mockDataList.items.filter((movie: IMovie) => movie.snippet.title.toLowerCase().includes(state.search.toLowerCase()));

    if(!searchResult.length){
      this.isShowNotFindMessage = true;
      this.list = [];
      return;
    } 

    this.isShowNotFindMessage = false;
    this.currentSort = state.sort;    
    this.filterTag = state.filter; 
    this.list = searchResult;
  }
}
