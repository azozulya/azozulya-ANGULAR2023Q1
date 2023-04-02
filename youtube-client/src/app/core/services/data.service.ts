import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from 'src/app/youtube/models/movie.interface';
import { IState } from 'src/app/youtube/models/state.interface';
import mockDataList from "../../../data/data.json";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() { }

  private list: IMovie[] = mockDataList.items;

  searchResultList!: IMovie[];

  private state: IState = {
    search: '',
    sort: {
      active: 'date',
      direction: 'asc'
    },
    filter: '',
  };

  getMovieDetails(id: string): IMovie | undefined {
    return this.list?.find(item => item.id === id);
  }

  getMovieList(): IMovie[] {
    return this.searchResultList;
  }

  searchMovies(searchStr: string): IMovie[] {
    if (!searchStr)
      return [];

    const searchResult = this.list.filter((movie: IMovie) => movie.snippet.title.toLowerCase().includes(searchStr.toLowerCase()));

    this.searchResultList = !searchResult.length ? [] : searchResult;

    this.state.search = searchStr;

    return this.searchResultList;
  }





}
