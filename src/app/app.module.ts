import { PortfolioService } from './services/portfolio.service';
import { RouterModule } from '@angular/router';
import { EducationService } from './services/education.service';
import { NavbarLinksService } from './services/navbar-links.service';
import { WorkHistoryService } from './services/work-history.service';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { SpaceToBrPipe } from './pipes/space-to-br.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { DoughnutChartCanvasDirective } from './doughnut-chart-canvas/doughnut-chart-canvas.component';
import { SkillsService } from './services/skills.service';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { WorkHistoryDatePipe } from './pipes/work-history-date.pipe';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { HistoryItemComponent } from './history-item/history-item.component';
import { EducationComponent } from './education/education.component';
import { PlaceholderIfEmptyPipe } from './pipes/placeholder-if-empty.pipe';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SkillsComponent,
    SpaceToBrPipe,
    NavbarComponent,
    DoughnutChartComponent,
    DoughnutChartCanvasDirective,
    WorkHistoryComponent,
    WorkHistoryDatePipe,
    HistoryItemComponent,
    EducationComponent,
    PlaceholderIfEmptyPipe,
    PortfolioComponent,
    PortfolioItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    SkillsService,
    WorkHistoryService,
    NavbarLinksService,
    EducationService,
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
