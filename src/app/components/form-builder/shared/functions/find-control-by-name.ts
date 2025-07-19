import { AbstractControl, FormGroup, UntypedFormGroup } from '@angular/forms';

export function findControlByName(controlName: string, rootControl: UntypedFormGroup): AbstractControl | null {
  let control: null | AbstractControl = null;

  for (const [currentControlName, currentControl] of Object.entries(rootControl.controls)) {
    if (currentControlName === controlName) {
      return currentControl;
    }

    if (currentControl instanceof FormGroup) {
      control = findControlByName(controlName, currentControl);
    }
  }

  return control;
}
