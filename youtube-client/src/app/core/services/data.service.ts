import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from 'src/app/youtube/models/movie.interface';
import { IState } from 'src/app/youtube/models/state.interface';
import mockDataList from "../../../data/data.json";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private list: IMovie[] = mockDataList.items;

  state: IState = {
    search: '',
    sort: {
      active: 'date',
      direction: 'asc'
    },
    filter: '',
    list: []
  };

  getMovieDetails(id: string): IMovie | undefined {
    return this.list?.find(item => item.id === id);
  }

  getMovieList(): IMovie[] {
    return this.state.list;
  }

  searchMovies(searchStr: string): void {
    if (!searchStr) 
      return;

    const searchResult = this.list.filter((movie: IMovie) => movie.snippet.title.toLowerCase().includes(searchStr.toLowerCase()));

    this.state = {
      ...this.state,
      search: searchStr,
      list: !searchResult.length ? [] : searchResult
    }
    console.log(this.state);
  }
}