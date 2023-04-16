import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { IState } from '../../models/state.interface';
import { Observable } from 'rxjs';
import { IMovie } from '../../models/movie.interface';
import { Store } from '@ngrx/store';
import { selectCards } from 'src/app/redux/selectors/cards.selector';
import { Sort } from '@angular/material/sort';
import { selectSort } from 'src/app/redux/selectors/sort.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  sort$: Observable<Sort>;
  movies$: Observable<IMovie[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.movies$ = this.store.select(selectCards);
    this.sort$ = this.store.select(selectSort);
  }
}
