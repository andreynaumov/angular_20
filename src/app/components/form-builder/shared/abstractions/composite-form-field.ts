import { computed, Directive, input } from '@angular/core';
import { BaseFormField } from './base-form-field';
import { UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { FormSchema } from '../types/form-schema';
import { CustomField } from '../custom-field';
import { FormModel } from '../types/form-model';

@Directive()
export abstract class CompositeFormField<T extends UntypedFormGroup | UntypedFormArray> extends BaseFormField<T> {
  protected readonly fieldSchema = input.required<FormSchema>();
  protected readonly customFields = input.required<readonly CustomField[]>();

  public readonly subModel = computed(() => this.formModel()?.[this.fieldName()] as FormModel);
}
