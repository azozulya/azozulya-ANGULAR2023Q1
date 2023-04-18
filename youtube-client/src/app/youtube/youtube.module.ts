import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared/shared.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ColoredDirective } from './directives/colored.directive';
import { MovieStatisticComponent } from './components/movie-statistic/movie-statistic.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchResultsComponent,
    MainComponent,
    DetailsComponent,
    AdminComponent,
    SortPipe,
    FilterPipe,
    ColoredDirective,
    MovieStatisticComponent,
    CustomCardComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedModule],
})
export class YoutubeModule {}
