import { createAction, props } from '@ngrx/store';

export const FilterAction = createAction('[Filter Cards] Add Filter', props<{ filter: string }>());
