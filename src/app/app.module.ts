import { NavbarLinksService } from './navbar-links.service';
import { WorkHistoryService } from './work-history.service';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { SpaceToBrPipe } from './space-to-br.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { DoughnutChartCanvasDirective } from './doughnut-chart-canvas/doughnut-chart-canvas.component';
import { SkillsService } from './skills.service';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { WorkHistoryDatePipe } from './work-history-date.pipe';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { HistoryItemComponent } from './history-item/history-item.component';
import { EducationComponent } from './education/education.component';

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
    EducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    SkillsService,
    WorkHistoryService,
    NavbarLinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
