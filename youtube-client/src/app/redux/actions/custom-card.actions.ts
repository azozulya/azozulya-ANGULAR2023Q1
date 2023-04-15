import { createActionGroup, props } from '@ngrx/store';
import { ICustomCard } from 'src/app/youtube/models/custom-card.interface';

export const CustomCardsActions = createActionGroup({
  source: 'CustomCards',
  events: {
    'Create Card': props<{ card: ICustomCard }>(),
  },
});
