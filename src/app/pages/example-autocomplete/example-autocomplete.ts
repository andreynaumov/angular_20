import { Component } from '@angular/core';
import { Autocomplete } from '../../components/autocomplete/autocomplete';

@Component({
  selector: 'app-example-autocomplete',
  imports: [Autocomplete],
  templateUrl: './example-autocomplete.html',
  styleUrl: './example-autocomplete.scss',
})
export class ExampleAutocomplete {}
