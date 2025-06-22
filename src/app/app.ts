import { Component } from '@angular/core';
import { ExampleForm } from './example-form/example-form';
import { CommonForm } from './common-form/common-form';

@Component({
  selector: 'app-root',
  imports: [ExampleForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
