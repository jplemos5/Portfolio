import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import emailjs from '@emailjs/browser';

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
  binaryFade = false;
  binaryText = '';
  hideUnlockBox = false;
  showBinary = false;
  private binaryInterval: any;
  userEmail = '';
  subject = '';
  message = '';
  successMessage = '';

  private contactLines = [
    "Email: jplemos52002@gmail.com",
    "Phone: +351 966524998",
    "GitHub",
    "LinkedIn"
  ];

  displayedContacts: string[] = [];
  githubUrl = 'https://github.com/jplemos5';
  linkedinUrl = 'https://www.linkedin.com/in/jo%C3%A3o-lemos-129b2924a/';
  correctKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ';

  constructor(private cd: ChangeDetectorRef) {}

  verifyKey() {
    if (this.inputKey === this.correctKey && !this.verifying) {
      this.verifying = true;
      this.displayText = '';
      this.displayedContacts = [];
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
      frame += 0.3;
      if (frame < target.length + 1) {
        requestAnimationFrame(animate);
      } else {
        this.displayText = target;
        this.cd.detectChanges();
        setTimeout(() => {
          this.hideUnlockBox = true;
          this.cd.detectChanges();
          setTimeout(() => {
            this.showBinary = true;
            this.startBinaryAnimation();
            setTimeout(() => {
              this.binaryFade = true;
              this.cd.detectChanges();
              setTimeout(() => {
                clearInterval(this.binaryInterval);
                this.unlocked = true;
                this.verifying = false;
                this.revealContacts();
                this.cd.detectChanges();
              }, 100);
            }, 1500);
          }, 10);
        }, 400);
      }
    };
    animate();
  }

  startBinaryAnimation() {
    const generateBinary = () => {
      let text = '';
      for (let i = 0; i < 5000; i++) {
        text += Math.random() > 0.5 ? '0' : '1';
      }
      this.binaryText = text;
      this.cd.detectChanges();
    };
    generateBinary();
    this.binaryInterval = setInterval(() => {
      generateBinary();
    }, 60);
  }

  revealContacts() {
    let index = 0;
    const revealNext = () => {
      if (index < this.contactLines.length) {
        this.displayedContacts.push(this.contactLines[index]);
        index++;
        this.cd.detectChanges();
        setTimeout(revealNext, 250);
      }
    };
    revealNext();
  }

  async sendEmail() {
    try {
      await emailjs.send(
        'service_nwc2f0s',
        'template_3o0ebae',
        {
          from_email: this.userEmail,
          subject: this.subject,
          message: this.message
        },
        'A5AMTwQ8qs0s0Qu9m'
      );
      this.successMessage = "Message transmitted successfully.";
      this.userEmail = '';
      this.subject = '';
      this.message = '';
      this.cd.detectChanges();
    } catch (error) {
      console.error(error);
    }
  }

  skip() {
    this.unlocked = true;
    this.displayedContacts = [...this.contactLines];
    this.cd.detectChanges();
  }

  openGithub() {
    window.open(this.githubUrl, '_blank');
  }

  openLinkedIn() {
    window.open(this.linkedinUrl, '_blank');
  }
}