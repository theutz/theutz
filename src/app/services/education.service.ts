import { EducationItem } from '../education/education-item';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { defaultEducationItems } from '../education/default-education-items';

@Injectable()
export class EducationService {
  private _src: ReplaySubject<EducationItem> = new ReplaySubject<EducationItem>();
  items$: Observable<EducationItem>;

  constructor() {
    this.items$ = this._src.asObservable();
    defaultEducationItems.map(item => this._src.next(item));
    this._src.complete();
  }

}
