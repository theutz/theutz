import { PortfolioComponent } from '../portfolio/portfolio.component';
import { EducationComponent } from '../education/education.component';
import { WorkHistoryComponent } from '../work-history/work-history.component';
import { SkillsComponent } from '../skills/skills.component';
import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'skills', component: SkillsComponent },
      { path: 'work-history', component: WorkHistoryComponent },
      { path: 'education', component: EducationComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: '', component: SkillsComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '/' }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
