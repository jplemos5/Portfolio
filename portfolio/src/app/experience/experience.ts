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
      title: 'Accounting Assistant (Nov. 25 - Current)',
      subtitle: 'Effectum',
      image: 'Experiences/Effectum.jpg',
      logo: 'Logos/Effectum Logo.jpg',
      text: 'Developed tools improving workflow and organizational efficiency.',
      fulltext: `<strong>Main Learnings:</strong><br> • Gained hands-on experience in organizing digital and physical documents.<br> • Learned to develop internal tools that streamline workflow.<br> • Built a client notification system, improving communication and task tracking.<br> • Improved team collaboration and task management.<br>`,
      key:""
    },
    {
      side: 'right',
      title: 'Double Degree Erasmus Program (Sep. 24 - Feb. 25)',
      subtitle: 'Université Gustave Eiffel',
      image: 'Experiences/UGE.jpg',
      logo: 'Logos/UGE Logo.jpg',
      text: 'Worked on projects optimizing traffic flow and patterns.',
      fulltext: `<strong>Main Learnings:</strong><br>• Collaborated in international teams on real-world traffic projects.<br>• Analyzed and optimized traffic flow patterns.<br>• Applied simulation and modeling tools for problem-solving.<br>• Enhanced teamwork and cross-cultural communication skills.<br>• Learned to present technical results effectively to diverse audiences.`,
      key:"MIIBIjANBgkqhki"
    },
    {
      side: 'right',
      title: 'IT Collaborator (Nov. 23 - Jun. 25)',
      subtitle: 'AEISCTE',
      image: 'Experiences/ISCTE.jpg',
      logo: 'Logos/AEISCTE Logo.png',
      text: 'Strengthened teamwork abilities and developed soft skills.',
      fulltext: `<strong>Main Learnings:</strong><br>• Provided IT support and solutions in a team environment.<br>• Improved communication with colleagues.<br>• Gained experience troubleshooting technical issues.<br>• Developed skills on Angular and overall Web Development.`,
      key:""
    },
    {
      side: 'right',
      title: 'Masters in Computer Engineering (Sep. 23 - Dec. 25)',
      subtitle: 'ISCTE - Instituto Universitário de Lisboa',
      image: 'Experiences/ISCTE.jpg',
      logo: 'Logos/ISCTE Logo.png',
      text: 'Completed a thesis on social rhythmic interactions.',
      fulltext: `<strong>Main Learnings:</strong><br>• Conducted research on social rhythmic interactions.<br>• Studied coordination and timing between robotic agents.<br>• Gained more experience in experimental design and data analysis.<br>• Applied programming frameworks to real-world problems.<br>• Improved scientific communication and technical writing skills.`,
      key:""
    },
    {
      side: 'left',
      title: 'Programming Teacher (Jun. 23 - Sep. 24)',
      subtitle: 'Happy Code',
      image: 'Experiences/Happy Code.webp',
      logo: 'Logos/HC Logo.png',
      text: 'Improved communication for effectively reaching audiences.',
      fulltext: `<strong>Main Learnings:</strong><br>• Learned to explain programming concepts clearly.<br>• Improved communication and presentation skills.<br>• Gained experience adapting lessons for different audiences.<br>• Developed patience and mentoring abilities.<br>• Enhanced teamwork and classroom management skills.`,
      key:""
    },
    {
      side: 'left',
      title: 'Assistant Teacher (Sep. 21 - Current)',
      subtitle: 'Bairro de Ideias',
      image: 'Experiences/Bairro de Ideias.webp',
      logo: 'Logos/BI Logo.jpg',
      text: 'Helped students and developed a management application.',
      fulltext: `<strong>Main Learnings:</strong><br>• Assisted students individually, enhancing teaching skills.<br>• Developed a management application to organize student information.<br>• Strengthened communication and collaboration with students and colleagues.`,
      key:""
    },
    {
      side: 'right',
      title: 'Bachelor’s Degree in Computer Engineering (Sep. 20 - Jun. 23)',
      subtitle: 'ISCTE',
      image: 'Experiences/ISCTE.jpg',
      logo: 'Logos/ISCTE Logo.png',
      text: 'Learned programming fundamentals and how to manage projects.',
      fulltext: `<strong>Main Learnings:</strong><br>• Gained solid foundations in programming and software development.<br>• Learned project management and teamwork in academic projects.<br>• Developed problem-solving and analytical skills.`,
      key:"G9w0BAQEFAAOCAQ"
    }
  ];

}