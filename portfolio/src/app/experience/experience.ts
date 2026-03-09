import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ExperienceCard } from './experience-card/experience-card';


@Component({
  selector: 'app-experience',
  imports: [CommonModule, MatCardModule, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

}
