import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMovie } from 'src/app/youtube/models/movie.interface';

export const featureKey = 'customCards';

export const selectCustomCardsState = createFeatureSelector<IMovie[]>(featureKey);

export const selectCustomCards = createSelector(selectCustomCardsState, (state: IMovie[]) => state);
