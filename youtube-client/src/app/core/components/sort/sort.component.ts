import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { ESort } from 'src/app/core/models/sort.interface';
import { Sort } from '@angular/material/sort';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SortComponent implements OnInit {
  sortParams = ESort;

  defaultSort!: Sort;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.defaultSort = this.dataService.state.sort;
  }

  sortData(sort: Sort): void {
    if (sort.direction === '') {
      sort.direction = 'asc';
    }

    this.dataService.state.sort = sort;
  }
}
