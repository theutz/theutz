import { PortfolioService } from '../services/portfolio.service';
import { PortfolioItem } from '../portfolio-item/portfolio-item';
import { NavbarLinksService } from '../services/navbar-links.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  items: PortfolioItem[] = [];

  constructor(
    private _navSvc: NavbarLinksService,
    private _portfolioSvc: PortfolioService
  ) { }

  ngOnInit() {
    this._navSvc.addLink({ id: 'portfolio', label: 'Examples' });
    this._portfolioSvc.items$
      .subscribe(item => this.items.push(item));
  }

}
