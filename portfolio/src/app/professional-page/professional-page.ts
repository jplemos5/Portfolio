import { Component } from '@angular/core';
import { TopBar } from '../top-bar/top-bar';
import { About } from '../about/about';
import { HoverService } from '../hover';

@Component({
  selector: 'app-professional-page',
  imports: [TopBar, About],
  templateUrl: './professional-page.html',
  styleUrl: './professional-page.css',
})
export class ProfessionalPage {
  constructor(public hoverService: HoverService) {}
}
