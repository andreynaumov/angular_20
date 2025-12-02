import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxOld } from '@ui-old/checkbox/checkbox';
import { DatepickerOld } from '@ui-old/datepicker/datepicker';

@Component({
  selector: 'app-ui-datepicker',
  imports: [ReactiveFormsModule, DatepickerOld, CheckboxOld, JsonPipe],
  templateUrl: './ui-datepicker.html',
  styleUrl: './ui-datepicker.scss',
})
export class UiDatepicker {
  control = new FormControl<string | null>(null, [Validators.required]);

  disableFlag = new FormControl(false);
  touchedFlag = new FormControl(false);

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      console.log('valueChanges: ', value);
    });

    this.control.statusChanges.subscribe((value) => {
      console.log('statusChanges: ', value);
    });

    this.disableFlag.valueChanges.subscribe((value) => {
      value ? this.control.disable() : this.control.enable();
    });

    this.touchedFlag.valueChanges.subscribe((value) => {
      value ? this.control.markAsTouched() : this.control.markAsUntouched();
    });
  }

  get validationErrorMessages() {
    return {
      required: 'Field is required.',
    };
  }

  get controlInfo() {
    return {
      value: this.control.value,
      status: this.control.status,
      valid: this.control.valid,
      invalid: this.control.invalid,
      enabled: this.control.enabled,
      disabled: this.control.disabled,
      touched: this.control.touched,
      untouched: this.control.untouched,
      pristine: this.control.pristine,
      dirty: this.control.dirty,
      errors: this.control.errors,
    };
  }
}
