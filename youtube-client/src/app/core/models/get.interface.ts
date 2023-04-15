import { IMovie } from 'src/app/youtube/models/movie.interface';
import { ISearchMovie } from './search-movie.interface';

export interface IGet {
  items: ISearchMovie[] | IMovie[];
}
