import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IMovie } from 'src/app/youtube/models/movie.interface';
import { IState } from 'src/app/youtube/models/state.interface';
import { IGet } from '../models/get.interface';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _state: IState = {
    search: '',
    sort: {
      active: 'date',
      direction: 'asc',
    },
    filter: '',
  };

  get state(): IState {
    return this._state;
  }

  protected set state(newState: IState) {
    this._state = newState;
  }

  constructor(private http: HttpClient, private store: Store) {}

  getMovieDetails(id: string): Observable<IMovie[]> {
    return this.http.get<IGet>('videos', { params: { id } }).pipe(map((data: IGet) => data.items as IMovie[]));
  }

  getStatistics(ids: string[]): Observable<IGet> {
    return this.http.get<IGet>('videos', { params: { id: ids } });
  }

  searchMovies(searchStr: string): Observable<IGet> {
    return this.http.get<IGet>('search', { params: { q: searchStr } });
  }
}
