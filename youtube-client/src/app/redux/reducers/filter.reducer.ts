import { createReducer, on } from '@ngrx/store';
import { FilterAction } from '../actions/filter.action';

const initialState: string = '';

export const filterReducer = createReducer(
  initialState,
  on(FilterAction, (_, { filter }): string => filter)
);
