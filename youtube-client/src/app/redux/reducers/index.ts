import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Sort } from '@angular/material/sort';
import { customCardReducer } from './custom-card.reducer';
import { cardsReducer } from './cards.reducer';
import { sortReducer } from './sort.reducer';
import { ICustomCard } from 'src/app/youtube/models/custom-card.interface';
import { IMovie } from 'src/app/youtube/models/movie.interface';
import { filterReducer } from './filter.reducer';

export interface State {
  customCards: ICustomCard[];
  cards: IMovie[];
  sort: Sort;
  filter: string;
}

export const initialState: State = {
  customCards: [],
  cards: [],
  sort: {
    active: 'date',
    direction: 'asc',
  },
  filter: '',
};

export const reducers: ActionReducerMap<State> = {
  customCards: customCardReducer,
  cards: cardsReducer,
  sort: sortReducer,
  filter: filterReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
