import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Background } from './background/background';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Background],
  templateUrl: "./app.html" ,
  styleUrls: ['./app.css', "../material-theme.scss"]
})
export class App {

}