import { Component, OnInit, signal } from '@angular/core';
import { FormSchema } from '../form-builder/shared/types/form-schema';
import { FormModel } from '../form-builder/shared/types/form-model';
import { Form } from '../form-builder/form/form';
import { CustomField } from '../form-builder/shared/custom-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { formModel } from './mocks/model.mock';
import { optionsMock } from './mocks/options.mock';
import { formSchema } from './example-form.const';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-example-form',
  imports: [Form, CustomField, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  templateUrl: './example-form.html',
  styleUrl: './example-form.scss',
})
export class ExampleForm implements OnInit {
  public readonly formSchema = signal<FormSchema | null>(null);
  public readonly formModel = signal<FormModel | null>(null);

  public logFormValue(formValue: Record<string, unknown>) {
    console.log(formValue);
  }

  ngOnInit(): void {
    optionsMock.subscribe((options) => {
      this.formSchema.set(formSchema({ options }));
    });

    formModel.subscribe((formModel) => {
      this.formModel.set(formModel);
    });
  }
}
