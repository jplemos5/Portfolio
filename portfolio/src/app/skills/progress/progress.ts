import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress',
  imports: [MatProgressBarModule, MatCardModule],
  templateUrl: './progress.html',
  styleUrl: './progress.css',
})
export class Progress {

  @Input() skill!: string
  @Input() percentage!: number
  @Input() imageUrl!: string
}
