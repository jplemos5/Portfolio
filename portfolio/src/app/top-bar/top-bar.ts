import { Component, AfterViewInit, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonToggleModule, MatButtonModule, CommonModule],
  templateUrl: './top-bar.html',
  styleUrls: ['./top-bar.css']
})
export class TopBar implements AfterViewInit {
  sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  activeIndex = 0;
  private scrollingToSection = false; // flag to disable mid-scroll updates

  ngAfterViewInit() {
    this.onScroll(); // initial active section
  }

  scrollToSection(sectionId: string, index: number) {
    this.activeIndex = index;       // immediately update notch
    this.scrollingToSection = true; // disable scroll listener

    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 60; // adjust for fixed topbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });

      // Re-enable scroll listener after scroll duration
      setTimeout(() => {
        this.scrollingToSection = false;
      }, 500); // slightly longer than CSS scroll duration
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.scrollingToSection) return; // skip mid-scroll updates

    const scrollPos = window.scrollY + window.innerHeight / 2; // center of viewport
    this.sections.forEach((section, index) => {
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          this.activeIndex = index;
        }
      }
    });
  }
}