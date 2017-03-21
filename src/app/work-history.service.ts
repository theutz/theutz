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
    },
    {
      company: 'Uber/Lyft',
      title: 'Driver',
      description: '',
      startDate: new Date(2015, 5),
      endDate: new Date(2016, 1),
      city: 'Nashville',
      state: 'Tennessee'
    },
    {
      company: 'Emergency Reporting',
      title: 'Content Writer/Producer',
      description: '',
      startDate: new Date(2013, 6),
      endDate: new Date(2015, 2),
      city: 'Bellingham',
      state: 'Washington'
    },
    {
      company: 'Christ United Methodist Church',
      title: 'Creative Director',
      description: '',
      startDate: new Date(2012, 5),
      endDate: new Date(2013, 1),
      city: 'Davenport',
      state: 'Iowa'
    },
    {
      company: 'SimpleDelta, LLC',
      title: 'Vice-President/Co-Founder',
      description: '',
      startDate: new Date(2010, 11),
      endDate: new Date(2012, 5),
      city: 'Bellingham',
      state: 'Washington'
    },
    {
      company: 'ShareNow, Inc',
      title: 'Project Coordinator',
      description: '',
      startDate: new Date(2009, 1),
      endDate: new Date(2010, 7),
      city: 'Bellingham',
      state: 'Washington'
    },
    {
      company: 'Northwest University',
      title: 'Associate Director of Media Services & Adjunct Faculty',
      description: '',
      startDate: new Date(2007, 7),
      endDate: new Date(2009, 5),
      city: 'Kirkland',
      state: 'Washington'
    },
    {
      company: 'Courtyard by Marriott',
      title: 'Front Desk Supervisor',
      description: '',
      startDate: new Date(2006, 10),
      endDate: new Date(2007, 7),
      city: 'Kirkland',
      state: 'Washington'
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
