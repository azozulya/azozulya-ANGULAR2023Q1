import { IStatistic } from './statistic.interface';

export interface IMovie {
  id?: string;
  title: string;
  description?: string;
  img: {
    url: string;
    width?: number;
    height?: number;
  };
  tags?: string[];
  link?: string;
  publishedAt: string;
  statistics?: IStatistic;
}
