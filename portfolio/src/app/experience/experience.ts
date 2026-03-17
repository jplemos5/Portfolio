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
      side: 'left',
      title: 'Accounting Assistant (Nov. 2025 - Current)',
      subtitle: 'Effectum',
      image: 'Effectum.jpg',
      logo: 'Effectum Logo.jpg',
      text: 'Developed tools improving workflow and organizational efficiency.',
      fulltext: `<strong>Main Learnings:</strong><br> • Gained hands-on experience in organizing digital and physical documents.<br> • Learned to develop internal tools that streamline workflow.<br> • Built a client notification system, improving communication and task tracking.<br> • Improved team collaboration and task management.<br>`,
      key:""
    },
    {
      side: 'right',
      title: 'Double Degree Erasmus Program (Sep. 2024 - Feb. 2025)',
      subtitle: 'Université Gustave Eiffel',
      image: 'UGE.jpg',
      logo: 'UGE Logo.jpg',
      text: 'Worked on projects optimizing traffic flow and patterns.',
      fulltext: `<strong>Main Learnings:</strong><br>• Collaborated in international teams on real-world traffic projects.<br>• Analyzed and optimized traffic flow patterns.<br>• Applied simulation and modeling tools for problem-solving.<br>• Enhanced teamwork and cross-cultural communication skills.<br>• Learned to present technical results effectively to diverse audiences.`,
      key:"MIIBIjANBgkqhki"
    },
    {
      side: 'right',
      title: 'Masters in Computer Engineering (Sep. 2023 - Dec. 2025)',
      subtitle: 'ISCTE - Instituto Universitário de Lisboa',
      image: 'ISCTE.jpg',
      logo: 'ISCTE Logo.png',
      text: 'Completed a thesis on social rhythmic interactions.',
      fulltext: `<strong>Main Learnings:</strong><br>• Conducted research on social rhythmic interactions.<br>• Studied coordination and timing between robotic agents.<br>• Gained more experience in experimental design and data analysis.<br>• Applied programming frameworks to real-world problems.<br>• Improved scientific communication and technical writing skills.`,
      key:""
    },
    {
      side: 'right',
      title: 'IT Collaborator (Nov. 2023 - Jun. 2025)',
      subtitle: 'AEISCTE',
      image: 'ISCTE.jpg',
      logo: 'AEISCTE Logo.png',
      text: 'Strengthened teamwork abilities and developed soft skills.',
      fulltext: `<strong>Main Learnings:</strong><br>• Provided IT support and solutions in a team environment.<br>• Improved communication with colleagues.<br>• Gained experience troubleshooting technical issues.<br>• Developed skills on Angular and overall Web Development.`,
      key:""
    },
    {
      side: 'left',
      title: 'Programming Teacher (Jun. 2023 - Sep. 2024)',
      subtitle: 'Happy Code',
      image: 'Happy Code.webp',
      logo: 'HC Logo.png',
      text: 'Improved communication for effectively reaching audiences.',
      fulltext: `<strong>Main Learnings:</strong><br>• Learned to explain programming concepts clearly.<br>• Improved communication and presentation skills.<br>• Gained experience adapting lessons for different audiences.<br>• Developed patience and mentoring abilities.<br>• Enhanced teamwork and classroom management skills.`,
      key:""
    },
    {
      side: 'left',
      title: 'Assistant Teacher (Sep. 2021 - Current)',
      subtitle: 'Bairro de Ideias',
      image: 'Bairro de Ideias.webp',
      logo: 'BI Logo.jpg',
      text: 'Helped students and developed a management application.',
      fulltext: `<strong>Main Learnings:</strong><br>• Assisted students individually, enhancing teaching skills.<br>• Developed a management application to organize student information.<br>• Strengthened communication and collaboration with students and colleagues.`,
      key:""
    },
    {
      side: 'right',
      title: 'Bachelor’s Degree in Computer Engineering (Sep. 2020 - Jun. 2023)',
      subtitle: 'ISCTE',
      image: 'ISCTE.jpg',
      logo: 'ISCTE Logo.png',
      text: 'Learned programming fundamentals and how to manage projects.',
      fulltext: `<strong>Main Learnings:</strong><br>• Gained solid foundations in programming and software development.<br>• Learned project management and teamwork in academic projects.<br>• Developed problem-solving and analytical skills.`,
      key:"G9w0BAQEFAAOCAQ"
    }
  ];

}