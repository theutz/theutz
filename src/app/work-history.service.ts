import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class WorkHistoryService {
  private _src: ReplaySubject<WorkHistoryItem> = new ReplaySubject<WorkHistoryItem>();
  private _defaultItems: WorkHistoryItem[] = [
    {
      company: 'Loews Hotels',
      title: 'Travel Planner',
      description: 'Reservations agent at Loews Hotels (NYSE: L). Among the top agents in both sales numbers and service measures.',
      startDate: new Date(2015, 12),
      endDate: new Date(),
      city: 'Nashville',
      state: 'Tennessee'
    }
  ];

  history$: Observable<WorkHistoryItem>;

  constructor() {
    this.history$ = this._src.asObservable();
    this._defaultItems.map(item => this._src.next(item));
  }
}

export interface WorkHistoryItem {
  company: string;
  title: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  city?: string;
  state?: string;
}
