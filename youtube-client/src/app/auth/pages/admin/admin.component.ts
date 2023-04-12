import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateUrl } from 'src/app/shared/url.validator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
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

  onCreate(): void {
    console.log('create card', this.createForm.status);
  }
}
