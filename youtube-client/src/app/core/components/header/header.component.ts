import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { IState } from 'src/app/youtube/models/state.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  @Output() onDataChanged = new EventEmitter<IState>();

  isHidden = true;

  state: IState = {
    search: '',
    sort: {
      active: 'date',
      direction: 'asc'
    },
    filter: '',
  };

  onChanged(searchStr: string) {
    this.state.search = searchStr;
    console.log('headre: ', this.state);
    this.onDataChanged.emit(this.state);
  }

  onSortChanged(sortParam: Sort) {
    this.state.sort = sortParam;
    this.onDataChanged.emit(this.state);
  }

  onFilterList(filterTag: string) {
    this.state.filter = filterTag;
    this.onDataChanged.emit(this.state);
  }
}
