import { SortDirection } from '@angular/material/sort';
import { createActionGroup, props } from '@ngrx/store';

export const SortActions = createActionGroup({
  source: 'Sort',
  events: {
    'Change Sort': props<{ active: string; direction: SortDirection }>(),
  },
});
