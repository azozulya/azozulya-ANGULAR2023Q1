import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMovie } from 'src/app/youtube/models/movie.interface';

export const featureKey = 'cards';

export const selectCardsState = createFeatureSelector<IMovie[]>(featureKey);

export const selectCards = createSelector(selectCardsState, (state: IMovie[]) => state);
