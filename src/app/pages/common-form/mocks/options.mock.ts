import { delay, Observable, of } from 'rxjs';
import { SelectOption } from '../../../components/form-builder/shared/types/form-config';

export const optionsMock: Observable<Record<string, SelectOption<unknown>[]>> = of({
  term: [
    { value: 'P5D', viewValue: '5 days' },
    { value: 'P10D', viewValue: '10 days' },
    { value: 'P4Y', viewValue: '4 years' },
    { value: 'P5M', viewValue: '5 months' },
  ],
  city: [
    { value: 'bryansk', viewValue: 'Bryansk' },
    { value: 'moskov', viewValue: 'Moskov' },
  ],
}).pipe(delay(1200));
