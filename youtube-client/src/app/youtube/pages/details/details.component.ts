import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { Location } from '@angular/common';
import { IMovieApi } from '../../models/movie-api.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private id!: string | null;
  private subscription: Subscription;

  item: IMovieApi;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subscription = this.activeRouter.paramMap.subscribe((params) => (this.id = params.get('id')));

    if (!this.id) {
      this.router.navigateByUrl('/404');
      return;
    }

    this.dataService.getMovieById(this.id).subscribe((data) => {
      if (!data.length) {
        this.router.navigateByUrl('/404');
        return;
      }

      this.item = data[0];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
