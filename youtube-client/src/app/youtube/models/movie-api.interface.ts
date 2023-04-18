import { ISnippet } from './snippet.interface';
import { IStatistic } from './statistic.interface';

export interface IMovieApi {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics?: IStatistic;
  source?: string;
  operator?: string;
}
