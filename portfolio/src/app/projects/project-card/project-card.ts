import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [MatCardModule, MatIconModule, MatDialogModule, CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() title!: string;
  @Input() skillsUsed!: string[];
  @Input() links!: {url: string, icon: string}[];
  @Input() image!: string;
  @Input() text!: string;
}

