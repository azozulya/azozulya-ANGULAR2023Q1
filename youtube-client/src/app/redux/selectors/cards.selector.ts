import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCustomCards } from './custom-cards.selector';
import { IMovie } from 'src/app/youtube/models/movie.interface';

export const featureKey = 'cards';

export const selectCardsState = createFeatureSelector<IMovie[]>(featureKey);

export const selectCards = createSelector(selectCardsState, (state: IMovie[]) => state);

export const selectAllCards = createSelector(selectCards, selectCustomCards, (cards, customCards) => {
  return [...cards, ...customCards];
});
