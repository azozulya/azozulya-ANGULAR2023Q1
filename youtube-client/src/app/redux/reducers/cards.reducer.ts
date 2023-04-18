import { createReducer, on } from '@ngrx/store';
import { CardsAction } from '../actions/cards.action';
import { IMovie } from 'src/app/youtube/models/movie.interface';

export const initialState: IMovie[] = [];

export const cardsReducer = createReducer(
  initialState,
  on(CardsAction.searchCards, (state): IMovie[] => [...state]),
  on(CardsAction.cardsStatistic, (state): IMovie[] => [...state]),
  on(CardsAction.addCards, (_, { cards }): IMovie[] => [...cards]),
  on(CardsAction.searchError, (): IMovie[] => [])
);
