import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css']
})
export class Contacts {

  unlocked = false;
  inputKey = '';
  displayText = '';
  verifying = false;

  // Conteúdo de contactos (dinâmico)
  private contactLines = [
    "Email: jplemos52002@gmail.com",
    "Phone: +351 966 524 998",
    "GitHub: github.com/user",
    "LinkedIn: linkedin.com/in/user"
  ];

  // Onde vamos injetar dinamicamente
  displayedContacts: string[] = [];

  // URLs dos botões
  githubUrl = 'https://github.com/jplemos5';
  linkedinUrl = 'https://www.linkedin.com/in/jo%C3%A3o-lemos-129b2924a/';

  correctKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ';
  private animationFrameId: number | null = null;

  constructor(private cd: ChangeDetectorRef) {}

  verifyKey() {
    if (this.inputKey === this.correctKey && !this.verifying) {
      this.verifying = true;
      this.displayText = ''; // limpar texto
      this.displayedContacts = []; // limpar contatos
      this.startDecryptAnimation();
    }
  }

  startDecryptAnimation() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const target = 'ACCESS GRANTED';
    let frame = 0;

    const animate = () => {
      let result = '';
      for (let i = 0; i < target.length; i++) {
        if (i < frame) {
          result += target[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      this.displayText = result;
      this.cd.detectChanges();

      frame += 0.3; // mais lento

      if (frame < target.length + 1) {
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.displayText = target;
        this.cd.detectChanges();

        // Depois de mostrar ACCESS GRANTED, injetamos os contatos linha a linha
        let index = 0;
        const revealNext = () => {
          if (index < this.contactLines.length) {
            this.displayedContacts.push(this.contactLines[index]);
            index++;
            this.cd.detectChanges();
            setTimeout(revealNext, 300); // efeito de linha a linha
          } else {
            this.unlocked = true;
            this.verifying = false;
            this.cd.detectChanges();
          }
        };
        setTimeout(revealNext, 500);
      }
    };

    animate();
  }

  skip() {
    this.unlocked = true;
    this.displayedContacts = [...this.contactLines];
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.cd.detectChanges();
  }

  openGithub() {
  window.open(this.githubUrl, '_blank');
}

  openLinkedIn() {
    window.open(this.linkedinUrl, '_blank');
  }
}