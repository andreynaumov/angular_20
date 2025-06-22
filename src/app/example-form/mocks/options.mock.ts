import { delay, Observable, of } from 'rxjs';
import { SelectOption } from '../../form-builder/shared/types/form-config';

export const optionsMock: Observable<Record<string, SelectOption<unknown>[]>> = of({
  relationship: [
    { value: 'brother', viewValue: 'Brother' },
    { value: 'sister', viewValue: 'Sister' },
    { value: 'mother', viewValue: 'Mother' },
    { value: 'father', viewValue: 'Father' },
  ],
  maritalStatus: [
    { value: 'single', viewValue: 'Single' },
    { value: 'married', viewValue: 'Married' },
  ],
}).pipe(delay(1200));
