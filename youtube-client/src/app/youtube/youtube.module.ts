import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared/shared.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    MainComponent,
    DetailsComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})

export class YoutubeModule { }
