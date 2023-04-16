import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterAction } from 'src/app/redux/actions/filter.action';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TagFilterComponent {
  filterTag!: string;

  constructor(private store: Store) {}

  onChange(): void {
    if (this.filterTag.length < 3) return;
    this.store.dispatch(FilterAction({ filter: this.filterTag }));
  }
}
