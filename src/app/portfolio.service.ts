import { NavbarLinksService } from './navbar-links.service';
import { PortfolioItem } from './PortfolioItem';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { defaultPortfolioItems } from './defaultPortfolioItems';

@Injectable()
export class PortfolioService {
  private _src: ReplaySubject<PortfolioItem> = new ReplaySubject<PortfolioItem>();
  items$: Observable<PortfolioItem>;

  constructor() {
    this.items$ = this._src.asObservable();

    defaultPortfolioItems
      .map(item => this._src.next(item));
    this._src.complete();
  }

}
