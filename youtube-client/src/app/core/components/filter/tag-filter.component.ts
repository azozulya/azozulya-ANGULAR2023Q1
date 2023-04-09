import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TagFilterComponent {
  filterTag!: string;

  constructor(private dataService: DataService) {}

  onChange(): void {
    this.dataService.state.filter = this.filterTag;
  }
}
