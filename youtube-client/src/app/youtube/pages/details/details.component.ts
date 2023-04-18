import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { IMovieApi } from '../../models/movie-api.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private getMovieSubscription: Subscription;

  movie: IMovieApi;

  constructor(
    private activeRouter: ActivatedRoute,
    public router: Router,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subscription = this.activeRouter.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (!id) {
        return this.goTo404();
      }

      this.getMovieSubscription = this.dataService.getMovieById(id).subscribe((movie: IMovieApi) => {
        if (!movie) {
          return this.goTo404();
        }

        this.movie = movie;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.getMovieSubscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

  goTo404(): void {
    this.router.navigateByUrl('/404');
  }
}
