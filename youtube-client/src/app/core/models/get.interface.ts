import { IMovieApi } from 'src/app/youtube/models/movie-api.interface';
import { ISearchMovie } from './search-movie.interface';

export interface IGet {
  items: ISearchMovie[] | IMovieApi[];
}
