import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimitiveFormField } from '../shared/abstractions/primitive-form-field';
import { DatepickerOld } from '@ui-old/datepicker/datepicker';

@Component({
  selector: 'app-form-field-date',
  imports: [ReactiveFormsModule, DatepickerOld],
  templateUrl: './form-field-date.html',
  styleUrl: './form-field-date.scss',
})
export class FormFieldDate extends PrimitiveFormField {}
