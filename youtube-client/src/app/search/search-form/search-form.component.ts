import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SearchFormComponent {
  searchString: string = '';

  onSearch(): void {
    console.log(this.searchString);
  }
}
