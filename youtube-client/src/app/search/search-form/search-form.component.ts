import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SearchFormComponent {
  @Output() onChanged = new EventEmitter<string>();

  searchString: string = '';

  onSearch(): void {    
    this.onChanged.emit(this.searchString);
  }
}