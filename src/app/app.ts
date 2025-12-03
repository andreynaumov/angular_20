import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from './components/main-layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [MainLayout, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
