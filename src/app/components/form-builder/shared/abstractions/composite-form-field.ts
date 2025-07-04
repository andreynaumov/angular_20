import { Directive, input } from '@angular/core';
import { BaseFormField } from './base-form-field';
import { UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { FormSchema } from '../types/form-schema';
import { CustomField } from '../custom-field';

@Directive()
export abstract class CompositeFormField<T extends UntypedFormGroup | UntypedFormArray> extends BaseFormField<T> {
  protected readonly fieldSchema = input.required<FormSchema>();
  protected readonly customFields = input.required<readonly CustomField[]>();
}
