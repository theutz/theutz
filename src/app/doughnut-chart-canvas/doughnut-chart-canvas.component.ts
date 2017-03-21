import * as Chart from 'chart.js';
import { Component, Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as tinycolor from 'tinycolor2';

/* tslint:disable-next-line */
@Directive({ selector: 'canvas[app-doughnut-chart-canvas]' })
export class DoughnutChartCanvasDirective implements OnDestroy, OnChanges, OnInit {
  @Input() level: number;
  @Input() cutoutPercentage = 70;
  /* tslint:disable-next-line:no-input-rename */
  @Input('color') baseColor: string;
  @Input() label: string;

  ctx: any;
  chart: Chart;
  initFlag = false;

  constructor(
    private _element: ElementRef,
  ) { }

  ngOnInit() {
    if (!tinycolor(this.baseColor).isValid()) {
      throw new Error(`Color provided (${this.baseColor}) is invalid`);
    }

    this.ctx = this._element.nativeElement.getContext('2d');
    this.initFlag = true;

    if (this.level) {
      this.refresh();
    }
  }

  private refresh(): void {
    this.ngOnDestroy();
    this.chart = this._getChartBuilder(this.ctx);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
  }

  private _getConfig(): any {
    return {
      type: 'doughnut',
      data: {
        labels: [this.label, ''],
        datasets: [
          {
            data: [this.level, 100 - this.level],
            backgroundColor: [this.baseColor, this._getSecondaryColor()],
            hoverBackgroundColor: [this._getHoverColor(this.baseColor), this._getHoverColor(this._getSecondaryColor())]
          }
        ]
      },
      options: {
        deferred: { enabled: true, delay: 1000 },
        tooltips: { enabled: false },
        legend: { display: false },
        cutoutPercentage: this.cutoutPercentage,
      }
    };
  }

  private _getSecondaryColor(): string {
    const tc = tinycolor(this.baseColor);
    return tc.isDark()
      ? tc.brighten(50).desaturate().toHexString()
      : tc.brighten(20).desaturate(15).toHexString();
  }

  private _getHoverColor(color: string): string {
    return tinycolor(color).brighten().toHexString();
  }

  private _getChartBuilder(ctx: any): any {
    if (typeof Chart === 'undefined') {
      throw new Error('Use angular-cli.json to embed Chart.js in scripts');
    }

    return new Chart(ctx, this._getConfig());
  }

  ngOnChanges(changes: SimpleChanges) { }

}