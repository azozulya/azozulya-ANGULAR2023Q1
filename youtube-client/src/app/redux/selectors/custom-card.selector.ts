import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICustomCard } from 'src/app/youtube/models/custom-card.interface';

export const featureKey = 'customCards';

export const selectCustomCardsState = createFeatureSelector<ICustomCard[]>(featureKey);

export const selectCustomCards = createSelector(selectCustomCardsState, (state: ICustomCard[]) => state);
