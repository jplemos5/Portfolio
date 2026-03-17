import { Component, HostListener } from '@angular/core';
import { TopBar } from '../top-bar/top-bar';
import { About } from '../about/about';
import { HoverService } from '../hover';
import { Experience } from '../experience/experience';
import { Skills } from '../skills/skills';
import { Contacts } from '../contacts/contacts';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-professional-page',
  imports: [TopBar, About, Experience, Skills, Contacts, Projects],
  templateUrl: './professional-page.html',
  styleUrl: './professional-page.css',
})
export class ProfessionalPage {
  constructor(public hoverService: HoverService) {}

  sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  activeIndex = 0;
  private scrollingToSection = false;

  ngAfterViewInit() {
    this.onScroll(); 
  }

  scrollToSection(sectionId: string, index: number) {
    this.activeIndex = index;       
    this.scrollingToSection = true;

    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 120; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
      setTimeout(() => {
        this.scrollingToSection = false;
      }, 500); 
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.scrollingToSection) return;

    const scrollPos = window.scrollY + window.innerHeight / 2;
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
