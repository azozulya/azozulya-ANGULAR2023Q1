import { Sort } from '@angular/material/sort';
import { IMovie } from './movie.interface';

export interface IState {
  search: string;
  sort: Sort;
  filter: string;
  list: IMovie[] | [];
}
