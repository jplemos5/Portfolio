import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Background } from './background/background';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Background],
  template: `
    <app-background></app-background>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');
}