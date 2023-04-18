import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/core/services/data.service';
import { CardsAction } from '../actions/cards.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { ISearchMovie } from 'src/app/core/models/search-movie.interface';
import { IGet } from 'src/app/core/models/get.interface';
import { IMovieApi } from 'src/app/youtube/models/movie-api.interface';
import { IMovie } from 'src/app/youtube/models/movie.interface';

@Injectable()
export class CardsEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  searchCards = createEffect(() => {
    return this.actions$.pipe(
      ofType(CardsAction.searchCards),
      switchMap((action) =>
        this.dataService.searchMovies(action.searchStr).pipe(
          map((data: IGet) => {
            return data.items?.length
              ? CardsAction.cardsStatistic({ ids: this.getIds(data.items as ISearchMovie[]) })
              : CardsAction.cardsError;
          }),
          catchError(() => of(CardsAction.cardsError))
        )
      )
    );
  });

  cardsStatistic = createEffect(() => {
    return this.actions$.pipe(
      ofType(CardsAction.cardsStatistic),
      switchMap((action: { ids: string[] }) =>
        this.dataService.getStatistics(action.ids).pipe(
          map((data: IGet) => {
            const createMovieCards: IMovie[] = (data.items as IMovieApi[]).map(
              (item: IMovieApi): IMovie => ({
                id: item.id,
                title: item.snippet.title,
                img: item.snippet.thumbnails.medium,
                publishedAt: item.snippet.publishedAt,
                statistics: item.statistics,
              })
            );
            return CardsAction.addCards({ cards: createMovieCards });
          }),
          catchError(() => of(CardsAction.cardsError))
        )
      )
    );
  });

  private getIds = (items: ISearchMovie[]): string[] =>
    items.reduce((acc: string[], item: ISearchMovie) => [...acc, item.id['videoId']], []);
}
