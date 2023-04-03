import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie.interface';

@Component({
  selector: 'app-movie-statistic',
  templateUrl: './movie-statistic.component.html',
  styleUrls: ['./movie-statistic.component.scss']
})
export class MovieStatisticComponent {
  @Input() movie!: IMovie;
}
