import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HoverService } from '../hover'; // caminho correto
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
  mainImage!: string;
  hoverImage!: string;
  hovering = false;

  constructor(private router: Router, public hoverService: HoverService) {
    this.currentPage = this.router.url.includes('/personal') ? 'personal' : 'professional';
    this.selectedMode = this.currentPage;
    this.setImages();
  }

  setImages() {
    if (this.currentPage === 'professional') {
      this.mainImage = 'Puto.jpg';   
      this.hoverImage = 'Puto.jpg';  
    } else {
      this.mainImage = 'Puto.jpg';   
      this.hoverImage = 'Puto.jpg';  
    }
  }

  onMouseEnter() {
    if (this.hoverService.hoverDisabled) return; // não faz hover se estiver desativado
    this.hovering = true;
  }

  onMouseLeave() {
    this.hovering = false;
    this.hoverService.hoverDisabled = false;  // reativa hover após sair
  }

  togglePage() {
    // desativa hover temporariamente
    this.hoverService.hoverDisabled = true;
    this.hovering = false;

    // alterna página
    this.currentPage = this.currentPage === 'professional' ? 'personal' : 'professional';
    this.selectedMode = this.currentPage;
    this.setImages();

    // navega para a nova rota
    this.router.navigate([this.currentPage]);
  }

  onModeChange(value: 'professional' | 'personal') {
    if (value !== this.currentPage) {
      this.hoverService.hoverDisabled = true;
      this.hovering = false;

      this.currentPage = value;
      this.selectedMode = value;
      this.setImages();
      this.router.navigate([value]);
    }
  }

  scrollToContacts() {
    const element = document.getElementById('contacts');
    if (element) {
      const topOffset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth'
      });
    }
  }
}