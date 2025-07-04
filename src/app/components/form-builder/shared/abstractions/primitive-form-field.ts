import { Directive, input } from '@angular/core';
import { BaseFormField } from './base-form-field';
import { UntypedFormControl } from '@angular/forms';

@Directive()
export abstract class PrimitiveFormField extends BaseFormField<UntypedFormControl> {
  protected readonly isReadonly = input.required<boolean>();
}
