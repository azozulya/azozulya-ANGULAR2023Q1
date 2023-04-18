import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movie.interface';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() cards!: IMovie[];
}
