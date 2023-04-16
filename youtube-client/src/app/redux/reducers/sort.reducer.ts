import { createReducer, on } from '@ngrx/store';
import { SortActions } from '../actions/sort.action';
import { Sort } from '@angular/material/sort';

const initialState: Sort = {
  active: 'date',
  direction: 'asc',
};

export const sortReducer = createReducer(
  initialState,
  on(
    SortActions.changeSort,
    (_, { active, direction }): Sort => ({
      active,
      direction,
    })
  )
);
