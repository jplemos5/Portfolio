import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string;
  @Input() logo!: string;
  @Input() text!: string;

}
