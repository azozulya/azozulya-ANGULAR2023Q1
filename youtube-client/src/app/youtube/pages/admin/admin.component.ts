import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateUrl } from 'src/app/shared/url.validator';
import { CustomCardsActions } from 'src/app/redux/actions/custom-card.actions';
import { selectCustomCards } from 'src/app/redux/selectors/custom-cards.selector';
import mockCustomCards from '../../../../data/custom-cards.json';
import { IMovie } from '../../models/movie.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  @Output() cards: IMovie[];

  customCards$: Observable<IMovie[]>;

  createForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.maxLength(255)]),
    img: new FormControl('', [Validators.required, ValidateUrl]),
    link: new FormControl('', [Validators.required, ValidateUrl]),
    date: new FormControl('', [Validators.required]),
  });

  maxDate = new Date();

  get title(): FormControl {
    return this.createForm.get('title') as FormControl<string>;
  }

  get description(): FormControl {
    return this.createForm.get('description') as FormControl<string>;
  }

  get img(): FormControl {
    return this.createForm.get('img') as FormControl<string>;
  }

  get link(): FormControl {
    return this.createForm.get('link') as FormControl<string>;
  }

  get date(): FormControl {
    return this.createForm.get('date') as FormControl<string>;
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.customCards$ = this.store.select(selectCustomCards);
  }

  onCreate(): void {
    const card = {
      ...this.createForm.value,
      statistics: { viewCount: 0, likeCount: 0, commentCount: 0 },
    };

    this.store.dispatch(CustomCardsActions.create({ card }));
    this.createForm.reset();
  }

  onGenerateCards(): void {
    console.log(mockCustomCards.cards);
    this.store.dispatch(CustomCardsActions.generate({ cards: mockCustomCards.cards }));
  }
}
