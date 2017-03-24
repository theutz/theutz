import { defaultWorkHistoryItems } from './portfolio/defaultWorkHistoryItem';
import { WorkHistoryItem } from './WorkHistoryItem';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class WorkHistoryService {
  private _src: ReplaySubject<WorkHistoryItem> = new ReplaySubject<WorkHistoryItem>();
  history$: Observable<WorkHistoryItem>;

  constructor() {
    this.history$ = this._src.asObservable();
    defaultWorkHistoryItems.map(item => this._src.next(item));
  }

}
