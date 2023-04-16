import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { IState } from '../../models/state.interface';
import { Observable } from 'rxjs';
import { IMovie } from '../../models/movie.interface';
import { Store } from '@ngrx/store';
import { selectCards } from 'src/app/redux/selectors/cards.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  protected get state(): IState {
    return this.dataService.state;
  }

  movies$: Observable<IMovie[]>;

  constructor(private store: Store, private dataService: DataService) {}

  ngOnInit(): void {
    this.movies$ = this.store.select(selectCards);
  }
}
