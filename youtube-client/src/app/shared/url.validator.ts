import { AbstractControl } from '@angular/forms';

interface IValidateUrl {
  invalidUrl: boolean;
}

export function ValidateUrl(control: AbstractControl): IValidateUrl | null {
  if (!control.value) return null;

  if (!control.value.startsWith('https://')) {
    return { invalidUrl: true };
  }

  return null;
}
