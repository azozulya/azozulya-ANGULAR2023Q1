import { IMovie } from 'src/app/youtube/models/movie.interface';
import { ISearchMovie } from './movie.interface';

export interface IGet {
  items: ISearchMovie[] | IMovie[];
}
