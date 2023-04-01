import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SortComponent } from './components/sort/sort.component';
import { TagFilterComponent } from './components/filter/tag-filter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TagFilterComponent,
    SortComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})

export class CoreModule { }
