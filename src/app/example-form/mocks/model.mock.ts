import { delay, of } from 'rxjs';

export const formModel = of({
  bio: {
    firstName: 'Ivan',
    age: 25,
  },
  siblings: [
    { name: 'Maria', relationship: 'sister' },
    { name: 'Denis', relationship: 'brother' },
  ],
  hasChildren: true,
  maritalStatus: 'married',
}).pipe(delay(1000));
