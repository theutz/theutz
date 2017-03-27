import { Subscription } from 'rxjs/Rx';
import { PortfolioService } from '../services/portfolio.service';
import { PortfolioItem } from '../portfolio-item/portfolio-item';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  items: PortfolioItem[] = [];

  private _portSub: Subscription;

  constructor(
    private _portfolioSvc: PortfolioService
  ) { }

  ngOnInit() {
    this._portSub = this._portfolioSvc.items$
      .subscribe(item => this.items.push(item));
  }

  ngOnDestroy() {
    this._portSub.unsubscribe();
  }

}
