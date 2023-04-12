import { AbstractControl } from '@angular/forms';

interface IValidatorPassword {
  invalidUpperLowerMix?: boolean;
  invalidLettersNumbersMix?: boolean;
  invalidSpecials?: boolean;
}

export function ValidatorPassword(control: AbstractControl): IValidatorPassword | null {
  console.log(control.value);
  const val = control.value;

  if (!val) return null;

  let result: IValidatorPassword = {};

  if (!/[A-Z]/.test(val) || !/[a-z]/.test(val)) result = { ...result, invalidUpperLowerMix: true };
  if (!/[0-9]/.test(val)) result = { ...result, invalidLettersNumbersMix: true };
  if (!/[^A-Za-z0-9]/.test(val)) result = { ...result, invalidSpecials: true };
  return result ?? null;
}
