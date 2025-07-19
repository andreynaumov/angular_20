import { Directive, effect, input } from '@angular/core';
import { FormFieldConfig } from '../types/form-config';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, merge, mergeMap } from 'rxjs';
import { getRootControl } from '../functions/get-root-control';

@Directive()
export abstract class BaseFormField<T extends UntypedFormControl | UntypedFormGroup | UntypedFormArray> {
  protected readonly control = input.required<T>();
  protected readonly fieldName = input.required<string>();
  protected readonly config = input<FormFieldConfig>();

  protected readonly currentControlValue = toSignal(
    merge(
      toObservable(this.control).pipe(map(({ value }) => value)), // Get the initial value when 'control' changes
      toObservable(this.control).pipe(mergeMap(({ valueChanges }) => valueChanges)), // Get the new value when 'control.value' changes
    ),
  );

  constructor() {
    effect(() => {
      const valueChangesFn = this.config()?.expressions?.valueChanges;

      if (valueChangesFn) {
        valueChangesFn({ form: getRootControl(this.control()), currentControlValue: this.currentControlValue() });
      }
    });
  }
}
