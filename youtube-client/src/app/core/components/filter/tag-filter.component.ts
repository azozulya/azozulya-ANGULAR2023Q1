import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagFilterComponent {
  filterTag!: string;

  @Output() onChanged = new EventEmitter<string>();

  onChange(): void {
    this.onChanged.emit(this.filterTag);
  }
}
