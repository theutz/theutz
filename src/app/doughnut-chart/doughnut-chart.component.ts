import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {
  @Input() name: string;
  @Input() level: number;
  @Input() color: string;

  ngOnInit() {
  }
}