import { PortfolioItem } from './portfolio-item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() item: PortfolioItem;

  constructor() { }

  ngOnInit() {

  }

}
