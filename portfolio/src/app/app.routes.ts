import { Routes } from '@angular/router';
import { ProfessionalPage } from './professional-page/professional-page';
import { PersonalPage } from './personal-page/personal-page';


export const routes: Routes = [
  { path: '', redirectTo: 'professional', pathMatch: 'full' },
  { path: 'professional', component: ProfessionalPage, data: { animation: 'ProfessionalPage' } },
  { path: 'personal', component: PersonalPage, data: { animation: 'PersonalPage' } },
  { path: '**', redirectTo: 'professional' }
];