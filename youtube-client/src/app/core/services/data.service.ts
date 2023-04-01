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

  list!: IMovie[];

  private state: IState = {
    search: '',
    sort: {
      active: 'date',
      direction: 'asc'
    },
    filter: '',
  };

  getMovieList(): IMovie[] {
    return this.list;
  }

  searchMovies(searchStr: string): IMovie[] {
    if (!searchStr)
      return [];

    const searchResult = mockDataList.items.filter((movie: IMovie) => movie.snippet.title.toLowerCase().includes(searchStr.toLowerCase()));

    this.list = !searchResult.length ? [] : searchResult;

    this.state.search = searchStr;

    return this.list;
  }





}
