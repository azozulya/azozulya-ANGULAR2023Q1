import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { IMovie } from '../../models/movie.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private id!: string | null;
  item!: IMovie

  constructor(private router: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => this.id = params.get('id'));

    if (this.id) {
      const details = this.dataService.getMovieDetails(this.id);
      console.log(this.id, details);
      if (details)
        this.item = details;
    }

  }


}
