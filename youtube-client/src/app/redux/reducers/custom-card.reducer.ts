import { createReducer, on } from '@ngrx/store';
import { CustomCardsActions } from '../actions/custom-card.actions';
import { ICustomCard } from 'src/app/youtube/models/custom-card.interface';

const initialState: ICustomCard[] = [];

export const customCardReducer = createReducer(
  initialState,
  on(CustomCardsActions.createCard, (state, { card }): ICustomCard[] => [...state, card])
);
