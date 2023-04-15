import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ICustomCard } from 'src/app/youtube/models/custom-card.interface';
import { customCardReducer } from './custom-card.reducer';

export interface State {
  customCards: ICustomCard[];
  cards: undefined[];
}

export const initialState: State = {
  customCards: [],
  cards: [],
};

export const reducers: ActionReducerMap<State> = {
  customCards: customCardReducer,
  cards: undefined,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
