import { AbstractControl, UntypedFormGroup } from '@angular/forms';

export function getRootControl(control: AbstractControl): UntypedFormGroup {
  let currentControl = control;

  while (currentControl.parent) currentControl = currentControl.parent;

  return currentControl as UntypedFormGroup;
}
