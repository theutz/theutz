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


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SkillsComponent,
    SpaceToBrPipe,
    NavbarComponent,
    DoughnutChartComponent,
    DoughnutChartCanvasDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
