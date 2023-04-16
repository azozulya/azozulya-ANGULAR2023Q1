import { createFeatureSelector, createSelector } from '@ngrx/store';

const featureKey = 'filter';

export const selectFilterState = createFeatureSelector<string>(featureKey);

export const selectFilter = createSelector(selectFilterState, (state: string) => state);
