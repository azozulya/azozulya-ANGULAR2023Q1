import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { customCardReducer } from './custom-card.reducer';
import { cardsReducer } from './cards.reducer';
import { ICustomCard } from 'src/app/youtube/models/custom-card.interface';
import { IMovie } from 'src/app/youtube/models/movie.interface';

export interface State {
  customCards: ICustomCard[];
  cards: IMovie[];
}

export const initialState: State = {
  customCards: [],
  cards: [],
};

export const reducers: ActionReducerMap<State> = {
  customCards: customCardReducer,
  cards: cardsReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
