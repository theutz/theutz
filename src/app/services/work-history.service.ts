import { defaultWorkHistoryItems } from '../work-history/default-work-history-items';;
import { WorkHistoryItem } from '../work-history/work-history-item';
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
