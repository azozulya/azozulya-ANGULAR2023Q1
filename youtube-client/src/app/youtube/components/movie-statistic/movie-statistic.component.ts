import { Component, Input } from '@angular/core';
import { IStatistic } from '../../models/statistic.interface';

@Component({
  selector: 'app-movie-statistic',
  templateUrl: './movie-statistic.component.html',
  styleUrls: ['./movie-statistic.component.scss'],
})
export class MovieStatisticComponent {
  @Input() statistic!: IStatistic;
}
