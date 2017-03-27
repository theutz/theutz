/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoughnutChartCanvasDirective } from './doughnut-chart-canvas.component';

describe('DoughnutChartCanvasDirective', () => {
  let component: DoughnutChartCanvasDirective;
  let fixture: ComponentFixture<DoughnutChartCanvasDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoughnutChartCanvasDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutChartCanvasDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
