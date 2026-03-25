import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: "Kuramoto Bandits Research",
      text: "Master’s thesis research project (final grade: 17/20) focused on sequential partner selection in rhythmic social interactions using the Kuramoto model. The work involved designing and running multiple simulations to analyse synchronization and decision strategies in rhythmic coordination scenarios. The code is temporarly private due to authorship considerations.",
      skillsUsed: ["Python","C++","Reinforcement Learning"],
      image: "Projects/Tese.png",
      links: [{url:"Dissertation_99145.pdf", icon:"description"}]
    },
    {
      title: "Bairro de Ideias Students Management App",
      text: "Web application developed for the Bairro de Ideias study center to streamline the student evaluation workflow. The platform simplifies daily assessment processes for teachers and enables faster, more structured feedback to parents regarding student progress and activities. The system is currently private due to security considerations.",
      skillsUsed: ["Python","Flask","HTML", "MySQL"],
      image: "Experiences/Bairro de Ideias.webp",
      links: []
    },
    {
      title: "Eiffel Bike Rent WebServices Project",
      text: "Project developed during my Erasmus as part of the WebServices course. The goal was to design and implement a set of APIs that would allow students to easily build platforms for buying or renting bicycles within the university community. Both the backend services and a demonstration website were implemented to showcase the system.",
      skillsUsed: ["Java", "HTML","CSS","JavaScript"],
      image: "Projects/EiffelBikeRent.png",
      links: [{url:"https://github.com/jplemos5/WebService-Project", icon:"code"}]
    },
    {
      title: "ISCTE Village Website",
      text: "Platform developed in collaboration with AEISCTE to manage registrations and logistics for the Punta Umbría student trip. The application digitized a previously manual process, providing a centralized system for participant management and automated registration handling while supporting hundreds of concurrent registrations.",
      skillsUsed: ["Angular","TypeScript","CSS", "Firebase"],
      image: "Projects/village.png",
      links: [{url:"https://isctevillage.web.app/", icon:"open_in_new"}]
    }
  ];
}
