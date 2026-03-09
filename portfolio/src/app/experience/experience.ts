import { CommonModule } from '@angular/common'; 
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ExperienceCard } from './experience-card/experience-card';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, MatCardModule, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

  experiences = [
    {
      side: 'right',
      title: 'Accounting Assistant (Nov. 2025 - Current)',
      subtitle: 'Effectum',
      image: 'Effectum.jpg',
      logo: 'Effectum Logo.jpg',
      text: 'Developed tools to improve workflow and organizational efficiency.',
      fulltext: 'Developed internal tools that significantly improved task organization and workflow efficiency within the accounting team.'
    },
    {
      side: 'left',
      title: 'Double Degree Erasmus Program (Sep. 2024 - Feb. 2025)',
      subtitle: 'Université Gustave Eiffel',
      image: 'UGE.jpg',
      logo: 'UGE Logo.jpg',
      text: 'Worked on projects optimizing traffic flow and movement patterns.',
      fulltext: 'Participated in international collaborative projects focused on traffic optimization and movement efficiency.'
    },
    {
      side: 'right',
      title: 'Masters in Computer Engineering (Sep. 2023 - Dec. 2025)',
      subtitle: 'ISCTE - Instituto Universitário de Lisboa',
      image: 'ISCTE.jpg',
      logo: 'ISCTE Logo.png',
      text: 'Completed a thesis on social rhythmic interactions.',
      fulltext: 'Master thesis focused on social rhythmic interactions and coordination between robotic agents.'
    },
    {
      side: 'right',
      title: 'IT Collaborator (Nov. 2023 - Jun. 2025)',
      subtitle: 'AEISCTE',
      image: 'ISCTE.jpg',
      logo: 'AEISCTE Logo.png',
      text: 'Gained teamwork experience and developed valuable soft skills.',
      fulltext: 'Worked within a collaborative team providing IT solutions and technical support, strengthening teamwork and communication skills.'
    },
    {
      side: 'left',
      title: 'Programming Teacher (Jun. 2023 - Sep. 2024)',
      subtitle: 'Happy Code',
      image: 'Happy Code.webp',
      logo: 'HC Logo.png',
      text: 'Improved communication for effectively reaching audiences.',
      fulltext: 'Taught programming concepts to younger students while improving communication and presentation skills.'
    },
    {
      side: 'right',
      title: 'Assistant Teacher (Sep. 2021 - Current)',
      subtitle: 'Bairro de Ideias',
      image: 'Bairro de Ideias.webp',
      logo: 'BI Logo.jpg',
      text: 'Helped students and developed a student management application.',
      fulltext: 'Provided one-to-one teaching support and developed a custom application to manage student information.'
    }
  ];

}