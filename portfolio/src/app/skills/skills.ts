import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { Progress } from './progress/progress';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  imports: [MatTabsModule, MatCardModule, Progress, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  themes = [
    {
      "Frontend": [
        {
          skill: "Angular",
          percentage: 80,
          imageUrl: "Logos/Angular Logo.png"
        },
        {
          skill: "React",
          percentage: 70,
          imageUrl: "Logos/React Logo.png"
        },
        {
          skill: "TS",
          percentage: 75,
          imageUrl: "Logos/TS Logo.png"
        },
        {
          skill: "HTML",
          percentage: 95,
          imageUrl: "Logos/HTML Logo.png"
        },
        {
          skill: "CSS",
          percentage: 90,
          imageUrl: "Logos/CSS Logo.png"
        },
      ],
      "Backend": [
        {
          skill: "JS",
          percentage: 90,
          imageUrl: "Logos/JS Logo.png"
        },
        {
          skill: "Node.js",
          percentage: 75,
          imageUrl: "Logos/Node Logo.png"
        },
        {
          skill: "Java",
          percentage: 90,
          imageUrl: "Logos/Java Logo.png"
        },
        {
          skill: "Python",
          percentage: 90,
          imageUrl: "Logos/Python Logo.png"
        },
        {
          skill: "Django",
          percentage: 80,
          imageUrl: "Logos/Django Logo.png"
        },
        {
          skill: "Flask",
          percentage: 85,
          imageUrl: "Logos/Flask Logo.png"
        },
      ],
      "Databases": [
        {
          skill: "MongoDB",
          percentage: 85,
          imageUrl: "Logos/MongoDB Logo.png"
        },
        {
          skill: "SQL",
          percentage: 90,
          imageUrl: "Logos/MySQL Logo.png"
        },
        {
          skill: "Firebase",
          percentage: 90,
          imageUrl: "Logos/Firebase Logo.png"
        }
      ],
      "Soft Skills": [
        {
          skill: "Git",
          percentage: 85,
          imageUrl: "Logos/Git Logo.png"
        },
        {
          skill: "SCRUM",
          percentage: 90,
          imageUrl: "Logos/SCRUM Logo.png"
        },
        {
          skill: "Documentation",
          percentage: 90,
          imageUrl: "Logos/Documentation Logo.png"
        },
        {
          skill: "Communication",
          percentage: 95,
          imageUrl: "Logos/Communication Logo.png"
        },
        {
          skill: "Organization",
          percentage: 95,
          imageUrl: "Logos/Organization Logo.png"
        },
      ],
      "Languages": [
        {
          skill: "Portuguese",
          percentage: 100,
          imageUrl: "Flags/Portuguese Flag.png"
        },
        {
          skill: "English",
          percentage: 90,
          imageUrl: "Flags/GB Flag.png"
        },
        {
          skill: "French",
          percentage: 15,
          imageUrl: "Flags/French Flag.png"
        },
        {
          skill: "Mandarin",
          percentage: 5,
          imageUrl: "Flags/Chinese Flag.png"
        },
      ]
    }
  ]
}
