import { createReducer, on } from '@ngrx/store';
import { CustomCardsActions } from '../actions/custom-card.actions';
import { IMovie } from 'src/app/youtube/models/movie.interface';

const initialState: IMovie[] = [];

export const customCardReducer = createReducer(
  initialState,
  on(CustomCardsActions.create, (state, { card }): IMovie[] => [card, ...state]),
  on(CustomCardsActions.generate, (state, { cards }): IMovie[] => [...state, ...cards])
);
