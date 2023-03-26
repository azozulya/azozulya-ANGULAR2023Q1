import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SortComponent {
  @Input() isShow!: boolean;
}
