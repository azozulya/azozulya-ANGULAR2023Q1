import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { IMovie } from 'src/app/youtube/models/movie.interface';
import { IState } from 'src/app/youtube/models/state.interface';
import { IGet } from '../models/get.interface';
import { ISearchMovie } from '../models/movie.interface';

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
    list: [],
  };

  get state(): IState {
    return this._state;
  }

  protected set state(newState: IState) {
    this._state = newState;
  }

  constructor(private http: HttpClient) {}

  getMovieDetails(id: string): Observable<IMovie[]> {
    return this.http.get<IGet>('videos', { params: { id } }).pipe(map((data: IGet) => data.items as IMovie[]));
  }

  getMovieList(): IMovie[] {
    return this.state.list;
  }

  searchMovies(searchStr: string): void {
    const search$: Observable<IGet> = this.http.get<IGet>('search', { params: { q: searchStr } });

    search$
      .pipe(
        map((data: IGet): string[] => {
          return (data.items as ISearchMovie[]).reduce(
            (acc: string[], item: ISearchMovie) => [...acc, item.id['videoId']],
            []
          );
        }),
        switchMap((ids: string[]) => {
          return this.http.get<IGet>('videos', { params: { id: ids } });
        })
      )
      .subscribe((data: IGet) => {
        this.state = {
          ...this.state,
          search: searchStr,
          list: !data.items.length ? [] : (data.items as IMovie[]),
        };
      });
  }
}
