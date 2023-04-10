import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
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
    this.search$ = fromEvent<InputEvent>(this.inputSearch?.nativeElement, 'input');

    this.search$
      ?.pipe(
        debounceTime(500),
        map((event: InputEvent): string => (event.target as HTMLInputElement).value),
        filter((val: string) => val.length > 3),
        distinctUntilChanged()
      )
      .subscribe((searchStr: string): void => {
        this.dataService.searchMovies(searchStr);

        if (this.router.url !== '/main') this.router.navigateByUrl('/main');
      });
  }
}
