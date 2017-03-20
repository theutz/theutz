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

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SkillsComponent,
    SpaceToBrPipe,
    NavbarComponent,
    DoughnutChartComponent,
    DoughnutChartCanvasDirective,
    WorkHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    SkillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
