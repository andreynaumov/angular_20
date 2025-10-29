import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { formSchema } from './example-form.const';
import { from } from 'rxjs';
import { Form } from '../../components/form-builder/form/form';
import { CustomField } from '../../components/form-builder/shared/custom-field';
import { FormSchema } from '../../components/form-builder/shared/types/form-schema';
import { FormModel } from '../../components/form-builder/shared/types/form-model';

@Component({
  selector: 'app-example-form',
  imports: [Form, CustomField, ReactiveFormsModule],
  templateUrl: './example-form.html',
  styleUrl: './example-form.scss',
})
export class ExampleForm implements OnInit {
  public readonly formSchema = signal<FormSchema | null>(null);
  public readonly formModel = signal<FormModel | null>(null);
  public readonly form = new UntypedFormGroup({});

  ngOnInit(): void {
    from(fetch('example-model.json').then((r) => r.json())).subscribe((formModel) => {
      this.formModel.set(formModel);
    });

    from(fetch('example-options.json').then((r) => r.json())).subscribe((options) => {
      this.formSchema.set(formSchema({ options }));
    });
  }

  public logFormValue(formValue: Record<string, unknown>) {
    console.log(formValue);
  }
}
