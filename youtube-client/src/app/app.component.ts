import { Component, Output } from '@angular/core';
import { DataService } from './core/services/data.service';
import { IMovie } from './youtube/models/movie.interface';
import { IState } from './youtube/models/state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  //@Output() list!: IMovie[];

  constructor(private dataService: DataService) { }

  onDataChanged(state: IState) {
    //if (!state.search) return;

    //this.list = this.dataService.searchMovies(state.search);
  }
}