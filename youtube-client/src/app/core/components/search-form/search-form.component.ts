import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchFormComponent implements AfterViewInit {
  private search$?: Observable<InputEvent>;

  @ViewChild('inputSearch') inputSearch?: ElementRef;

  constructor(private dataService: DataService, private router: Router) {}

  ngAfterViewInit(): void {
    this.search$ = fromEvent(this.inputSearch?.nativeElement, 'input');

    this.search$
      ?.pipe(
        map((event) => {
          return (event.target as HTMLInputElement).value;
        }),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((searchStr) => {
        if (searchStr.length > 3) {
          this.dataService.searchMovies(searchStr);

          if (this.router.url !== '/main') this.router.navigateByUrl('/main');
        }
      });
  }
}
