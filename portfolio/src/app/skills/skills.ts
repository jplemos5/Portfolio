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
          imageUrl: "a"
        },
        {
          skill: "React",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "TS",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "HTML",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "CSS",
          percentage: 85,
          imageUrl: "a"
        },
      ],
      "Backend": [
        {
          skill: "JS",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "Node.js",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "Java",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "Python",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "Django",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "Flask",
          percentage: 85,
          imageUrl: "a"
        },
      ],
      "Databases": [
        {
          skill: "MongoDB",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "SQL",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "Firebase",
          percentage: 85,
          imageUrl: "a"
        }
      ],
      "Tools": [
        {
          skill: "Git",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "npm",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "pip",
          percentage: 85,
          imageUrl: "a"
        }
      ],
      "Soft Skills": [
        {
          skill: "SCRUM",
          percentage: 85,
          imageUrl: "a"
        },
        {
          skill: "Documentation",
          percentage: 85,
          imageUrl: "a"
        }
      ]
    }
  ]
}
