import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-experience-card',
  imports: [MatCardModule, MatIconModule, MatDialogModule],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string;
  @Input() logo!: string;
  @Input() text!: string;
  @Input() fulltext!: string;

  @Input() experiences!: any[];
  @Input() index!: number;

  currentIndex!: number;

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

openDialog() {
  this.currentIndex = this.index;
  this.dialog.open(this.dialogTemplate, {
    width: '650px',
    panelClass: 'experience-dialog'
  });
}

  get currentExperience() { return this.experiences[this.currentIndex]; }

  next() { if (this.currentIndex < this.experiences.length - 1) { this.currentIndex++; } }
  previous() { if (this.currentIndex > 0) { this.currentIndex--; } }
}