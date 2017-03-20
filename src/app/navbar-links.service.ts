import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class NavbarLinksService {
  private _src: ReplaySubject<NavbarLink> = new ReplaySubject<NavbarLink>();
  links$: Observable<NavbarLink>;

  constructor() {
    this.links$ = this._src.asObservable();
  }

  addLink(link: NavbarLink): void {
    this._src.next(link);
  }
}

export interface NavbarLink {
  label: string;
  id: string;
}
