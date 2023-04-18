import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IMovieApi } from 'src/app/youtube/models/movie-api.interface';
import { IGet } from '../models/get.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getMovieDetails(id: string): Observable<IMovieApi[]> {
    return this.http.get<IGet>('videos', { params: { id } }).pipe(map((data: IGet) => data.items as IMovieApi[]));
  }

  getStatistics(ids: string[]): Observable<IGet> {
    return this.http.get<IGet>('videos', { params: { id: ids } });
  }

  searchMovies(searchStr: string): Observable<IGet> {
    return this.http.get<IGet>('search', { params: { q: searchStr } });
  }
}
