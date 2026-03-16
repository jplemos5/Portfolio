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
          percentage: 85,
          imageUrl: "Angular Logo.png"
        },
        {
          skill: "React",
          percentage: 85,
          imageUrl: "React Logo.png"
        },
        {
          skill: "TS",
          percentage: 85,
          imageUrl: "TS Logo.png"
        },
        {
          skill: "HTML",
          percentage: 85,
          imageUrl: "HTML Logo.png"
        },
        {
          skill: "CSS",
          percentage: 85,
          imageUrl: "CSS Logo.png"
        },
      ],
      "Backend": [
        {
          skill: "JS",
          percentage: 85,
          imageUrl: "JS Logo.png"
        },
        {
          skill: "Node.js",
          percentage: 85,
          imageUrl: "Node Logo.png"
        },
        {
          skill: "Java",
          percentage: 85,
          imageUrl: "Java Logo.png"
        },
        {
          skill: "Python",
          percentage: 85,
          imageUrl: "Python Logo.png"
        },
        {
          skill: "Django",
          percentage: 85,
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
          percentage: 85,
          imageUrl: "MySQL Logo.png"
        },
        {
          skill: "Firebase",
          percentage: 85,
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
          percentage: 85,
          imageUrl: "SCRUM Logo.png"
        },
        {
          skill: "Documentation",
          percentage: 85,
          imageUrl: "Documentation Logo.png"
        },
        {
          skill: "Communication",
          percentage: 85,
          imageUrl: "Communication Logo.png"
        },
        {
          skill: "Organization",
          percentage: 85,
          imageUrl: "Organization Logo.png"
        }
      ]
    }
  ]
}
