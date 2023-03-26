import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() onDataChanged = new EventEmitter<string>();

  onChanged(searchStr: string){
    this.onDataChanged.emit(searchStr);
  }
}
