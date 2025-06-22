import { delay, Observable, of } from 'rxjs';
import { CommonForm } from '../common-form.type';

export const formModel: Observable<CommonForm> = of({
  credit: {
    amount: 10_000,
    term: 'P4Y',
    city: 'moskov',
  },
  contactData: {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    middleName: 'Ivanov',
    birthDate: '1.10.1983',
    email: 'fs@sdf.sdf',
    phone: '89002223311',
  },
}).pipe(delay(1000));
