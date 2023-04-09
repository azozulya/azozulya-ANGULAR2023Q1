import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStatisticComponent } from './movie-statistic.component';

describe('MovieStatisticComponent', () => {
  let component: MovieStatisticComponent;
  let fixture: ComponentFixture<MovieStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieStatisticComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
