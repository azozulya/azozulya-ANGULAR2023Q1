import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ESort } from 'src/models/sort.interface';
import { IState } from 'src/models/state.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  @Output() onDataChanged = new EventEmitter<IState>();

  isShow = false;

  state: IState = { 
    search: '', 
    sort: {
      active: 'date',
      direction: 'asc'
    },
  };

  onChanged(searchStr: string){
    this.state.search = searchStr;
    this.onDataChanged.emit(this.state);
  }

  onSortChanged(sortParam: Sort){
    this.state.sort = sortParam;
    this.onDataChanged.emit(this.state);
  }  
}
