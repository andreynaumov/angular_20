import { Directive, input } from '@angular/core';
import { FormFieldConfig } from '../types/form-config';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Directive()
export abstract class BaseFormField<T extends UntypedFormControl | UntypedFormGroup | UntypedFormArray> {
  protected readonly control = input.required<T>();
  protected readonly config = input<FormFieldConfig>();
}
