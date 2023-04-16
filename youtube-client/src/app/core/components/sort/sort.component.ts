import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ESort } from 'src/app/core/models/sort.interface';
import { SortActions } from 'src/app/redux/actions/sort.action';
import { selectSort } from 'src/app/redux/selectors/sort.selector';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SortComponent implements OnInit {
  sortParams = ESort;

  defaultSort$!: Observable<Sort>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.defaultSort$ = this.store.select(selectSort);
  }

  sortData(sort: Sort): void {
    if (sort.direction === '') {
      sort.direction = 'asc';
    }

    this.store.dispatch(SortActions.changeSort({ ...sort }));
  }
}
