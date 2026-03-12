import { Component, Input, ElementRef, HostListener } from '@angular/core';
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

   constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const card = this.el.nativeElement.querySelector('.skill-card');
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; 
    const rotateY = ((x - centerX) / centerX) * 10; 

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const card = this.el.nativeElement.querySelector('.skill-card');
    card.style.transform = `rotateX(0deg) rotateY(0deg)`; // volta ao normal
  }
}


