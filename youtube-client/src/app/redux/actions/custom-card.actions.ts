import { createActionGroup, props } from '@ngrx/store';
import { IMovie } from 'src/app/youtube/models/movie.interface';

export const CustomCardsActions = createActionGroup({
  source: 'CustomCards',
  events: {
    'Create': props<{ card: IMovie }>(),
    'Generate': props<{ cards: IMovie[] }>(),
  },
});
