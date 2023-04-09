import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { IState } from '../../models/state.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  protected get state(): IState {
    return this.dataService.state;
  }

  constructor(private dataService: DataService) {}
}

// AIzaSyDL-9NcsUHxWuMeVI4zCxb7K_523W5KBG0
