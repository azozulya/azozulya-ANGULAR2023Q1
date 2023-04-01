import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IMovie } from 'src/app/youtube/models/movie.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {
  list!: IMovie[];

  currentSort!: Sort;
  filterTag!: string;

  searchStr!: string | null;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.searchStr = params['search'];
      this.list = !this.searchStr ? [] : this.dataService.searchMovies(this.searchStr);
    });
  }

  ngOnInit(): void {
    this.searchStr = this.route.snapshot.paramMap.get('search');

    if (!this.searchStr) return;

    this.list = this.dataService.searchMovies(this.searchStr);
  }
}