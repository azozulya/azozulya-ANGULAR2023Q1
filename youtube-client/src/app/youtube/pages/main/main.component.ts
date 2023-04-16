import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMovie } from '../../models/movie.interface';
import { selectCards } from 'src/app/redux/selectors/cards.selector';
import { selectSort } from 'src/app/redux/selectors/sort.selector';
import { selectFilter } from 'src/app/redux/selectors/filter.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  sort$: Observable<Sort>;
  filter$: Observable<string>;
  movies$: Observable<IMovie[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.movies$ = this.store.select(selectCards);
    this.sort$ = this.store.select(selectSort);
    this.filter$ = this.store.select(selectFilter);
  }
}
