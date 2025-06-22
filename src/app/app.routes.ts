import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'common-form',
  },
  {
    path: 'example-form',
    loadComponent: () => import('./example-form/example-form').then((f) => f.ExampleForm),
  },
  {
    path: 'common-form',
    loadComponent: () => import('./common-form/common-form').then((f) => f.CommonForm),
  },
  {
    path: 'autocomplete',
    loadComponent: () => import('./example-autocomplete/example-autocomplete').then((f) => f.ExampleAutocomplete),
  },
];
