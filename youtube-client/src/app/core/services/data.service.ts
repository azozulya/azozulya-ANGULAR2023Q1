import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IMovie } from 'src/app/youtube/models/movie.interface';
import { IGet } from '../models/get.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

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
