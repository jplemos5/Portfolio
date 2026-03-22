import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HoverService } from '../hover';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  selectedMode: 'professional' | 'personal';
  currentPage: 'professional' | 'personal';

  // NEW: preview mode (used for hover sync)
  previewMode: 'professional' | 'personal' | null = null;

  mainImage!: string;
  hovering = false;

  constructor(private router: Router, public hoverService: HoverService) {
    this.currentPage = this.router.url.includes('/personal') ? 'personal' : 'professional';
    this.selectedMode = this.currentPage;
    this.setImages();
  }

  setImages() {
    if (this.currentPage === 'professional') {
      this.mainImage = 'Profile/Professional.png';
    } else {
      this.mainImage = 'Profile/Personal.png';
    }
  }

  // IMAGE HOVER
  onMouseEnter() {
    if (this.hoverService.hoverDisabled) return;

    this.hovering = true;
    this.previewMode = this.currentPage === 'professional' ? 'personal' : 'professional';
  }

  onMouseLeave() {
    this.hovering = false;
    this.previewMode = null;
    this.hoverService.hoverDisabled = false;
  }

  // BUTTON HOVER
  onButtonHover(mode: 'professional' | 'personal') {
    if (this.hoverService.hoverDisabled) return;

    if (mode !== this.currentPage) {
      this.previewMode = mode;
      this.hovering = true;
    }
  }

  onButtonLeave() {
    this.previewMode = null;
    this.hovering = false;
  }

  togglePage() {
    this.hoverService.hoverDisabled = true;
    this.hovering = false;
    this.previewMode = null;

    this.currentPage = this.currentPage === 'professional' ? 'personal' : 'professional';
    this.selectedMode = this.currentPage;
    this.setImages();

    this.router.navigate([this.currentPage]);
  }

  onModeChange(value: 'professional' | 'personal') {
    if (value !== this.currentPage) {
      this.hoverService.hoverDisabled = true;
      this.hovering = false;
      this.previewMode = null;

      this.currentPage = value;
      this.selectedMode = value;
      this.setImages();
      this.router.navigate([value]);
    }
  }

  scrollToContacts() {
    const element = document.getElementById('contacts');
    if (element) {
      const topOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  }
}