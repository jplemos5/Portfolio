import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Background } from './background/background';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Background],
  template: `
    <div class="page-wrapper">
      <app-background></app-background>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.css']
})
export class App {

}