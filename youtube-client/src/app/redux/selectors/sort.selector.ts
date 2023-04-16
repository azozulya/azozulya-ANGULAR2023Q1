import { Sort } from '@angular/material/sort';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const featureKey = 'sort';

export const selectSortState = createFeatureSelector<Sort>(featureKey);

export const selectSort = createSelector(selectSortState, (state: Sort) => state);
