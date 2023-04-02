import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { IState } from 'src/app/youtube/models/state.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  isHidden = true;
  state!: IState;

  constructor(private dataService: DataService) {
    this.state = this.dataService.state;
  } 

  onFilterList(filterTag: string) {
    this.state.filter = filterTag;
    //this.onDataChanged.emit(this.state);
  }
}
