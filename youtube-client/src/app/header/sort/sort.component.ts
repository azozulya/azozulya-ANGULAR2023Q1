import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { ESort } from 'src/models/sort.interface';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SortComponent {
  @Input() defaultSort!: Sort;
  @Input() isShow!: boolean;
  @Output() onChanged = new EventEmitter<Sort>();

  sortParams = ESort;

  sortData(sort: Sort){
    if(sort.direction === '') {
      sort.direction = 'asc';      
    } 

    this.onChanged.emit(sort);
  }
}
