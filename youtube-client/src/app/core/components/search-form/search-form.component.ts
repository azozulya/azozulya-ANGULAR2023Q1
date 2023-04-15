import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Store } from '@ngrx/store';
import { CardsAction } from 'src/app/redux/actions/cards.action';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchFormComponent implements AfterViewInit {
  private search$?: Observable<InputEvent>;

  @ViewChild('inputSearch') inputSearch?: ElementRef;

  constructor(private router: Router, private store: Store) { }

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
        this.store.dispatch(CardsAction.searchCards({ searchStr }));

        if (this.router.url !== '/main') this.router.navigateByUrl('/main');
      });
  }
}
