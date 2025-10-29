import { AbstractControl, FormArray, FormGroup, UntypedFormGroup } from '@angular/forms';

export function findControlByName(controlName: string, rootControl: AbstractControl): AbstractControl | null {
  if (rootControl instanceof FormGroup) {
    /**
     * Проверяем прямые дочерние контролы
     */
    if (Object.prototype.hasOwnProperty.call(rootControl.controls, controlName)) {
      return rootControl.controls[controlName];
    }

    /**
     *  Ищем во вдоженных группах и массивах
     */
    for (const currentControl of Object.values(rootControl.controls)) {
      if (currentControl instanceof FormGroup || currentControl instanceof FormArray) {
        const foundControl = findControlByName(controlName, currentControl);

        if (foundControl) {
          return foundControl;
        }
      }
    }
  } else if (rootControl instanceof FormArray) {
    /**
     * Ищем в элементах FormArray
     */
    for (const currentControl of rootControl.controls) {
      if (currentControl instanceof FormGroup || currentControl instanceof FormArray) {
        const foundControl = findControlByName(controlName, currentControl);

        if (foundControl) {
          return foundControl;
        }
      }
    }
  }

  return null;
}
