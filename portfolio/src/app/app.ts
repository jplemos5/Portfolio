import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Background } from './background/background';
import { TopBar } from './top-bar/top-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Background, TopBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');
}