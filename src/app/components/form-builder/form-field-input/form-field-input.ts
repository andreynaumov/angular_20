import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PrimitiveFormField } from '../shared/abstractions/primitive-form-field';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-field-input',
  imports: [ReactiveFormsModule, MatInputModule, KeyValuePipe],
  templateUrl: './form-field-input.html',
  styleUrl: './form-field-input.scss',
})
export class FormFieldInput extends PrimitiveFormField {}
