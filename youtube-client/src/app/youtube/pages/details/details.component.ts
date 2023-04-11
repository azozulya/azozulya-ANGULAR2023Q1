import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IMovie } from '../../models/movie.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private id!: string | null;

  item: IMovie;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((params) => (this.id = params.get('id')));

    if (!this.id) {
      this.router.navigateByUrl('/404');
      return;
    }

    this.dataService.getMovieDetails(this.id).subscribe((data) => {
      if (!data.length) {
        this.router.navigateByUrl('/404');
        return;
      }

      this.item = data[0];
    });
  }

  goBack(): void {
    this.location.back();
  }
}
