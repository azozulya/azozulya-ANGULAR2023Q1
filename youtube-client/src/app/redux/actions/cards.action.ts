import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IMovie } from 'src/app/youtube/models/movie.interface';

export const CardsAction = createActionGroup({
  source: 'Cards',
  events: {
    'Search Cards': props<{ searchStr: string }>(),
    'Cards Statistic': props<{ ids: Array<string> }>(),
    'Add Cards': props<{ cards: IMovie[] }>(),
    'Cards Error': emptyProps(),
  },
});
