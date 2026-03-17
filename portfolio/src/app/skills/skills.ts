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
          imageUrl: "Angular Logo.png"
        },
        {
          skill: "React",
          percentage: 70,
          imageUrl: "React Logo.png"
        },
        {
          skill: "TS",
          percentage: 75,
          imageUrl: "TS Logo.png"
        },
        {
          skill: "HTML",
          percentage: 95,
          imageUrl: "HTML Logo.png"
        },
        {
          skill: "CSS",
          percentage: 90,
          imageUrl: "CSS Logo.png"
        },
      ],
      "Backend": [
        {
          skill: "JS",
          percentage: 90,
          imageUrl: "JS Logo.png"
        },
        {
          skill: "Node.js",
          percentage: 75,
          imageUrl: "Node Logo.png"
        },
        {
          skill: "Java",
          percentage: 90,
          imageUrl: "Java Logo.png"
        },
        {
          skill: "Python",
          percentage: 90,
          imageUrl: "Python Logo.png"
        },
        {
          skill: "Django",
          percentage: 80,
          imageUrl: "Django Logo.png"
        },
        {
          skill: "Flask",
          percentage: 85,
          imageUrl: "Flask Logo.png"
        },
      ],
      "Databases": [
        {
          skill: "MongoDB",
          percentage: 85,
          imageUrl: "MongoDB Logo.png"
        },
        {
          skill: "SQL",
          percentage: 90,
          imageUrl: "MySQL Logo.png"
        },
        {
          skill: "Firebase",
          percentage: 90,
          imageUrl: "Firebase Logo.png"
        }
      ],
      "Soft Skills": [
        {
          skill: "Git",
          percentage: 85,
          imageUrl: "Git Logo.png"
        },
        {
          skill: "SCRUM",
          percentage: 90,
          imageUrl: "SCRUM Logo.png"
        },
        {
          skill: "Documentation",
          percentage: 90,
          imageUrl: "Documentation Logo.png"
        },
        {
          skill: "Communication",
          percentage: 95,
          imageUrl: "Communication Logo.png"
        },
        {
          skill: "Organization",
          percentage: 95,
          imageUrl: "Organization Logo.png"
        },
      ]
    }
  ]
}
