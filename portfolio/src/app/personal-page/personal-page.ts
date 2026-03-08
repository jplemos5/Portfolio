import { Component } from '@angular/core';
import { TopBar } from '../top-bar/top-bar';
import { About } from '../about/about';
import { HoverService } from '../hover';


@Component({
  selector: 'app-personal-page',
  imports: [TopBar, About],
  templateUrl: './personal-page.html',
  styleUrl: './personal-page.css',
})
export class PersonalPage {
  constructor(public hoverService: HoverService) {}
}
