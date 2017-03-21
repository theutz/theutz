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
      description: 'Set out for some advenutre as a self-employed driver in one of the nation\'s fastest growing cities.',
      startDate: new Date(2015, 5),
      endDate: new Date(2016, 1),
      city: 'Nashville',
      state: 'Tennessee'
    },
    {
      company: 'Emergency Reporting',
      title: 'Content Writer/Producer',
      /* tslint:disable-next-line:max-line-length */
      description: 'Content marketing and front-end web development. Built <a href="http://emergencyreporting.com" target="_blank">emergencyreporting.com</a> with Wordpress.',
      startDate: new Date(2013, 6),
      endDate: new Date(2015, 2),
      city: 'Bellingham',
      state: 'Washington'
    },
    {
      company: 'Christ Church',
      title: 'Creative Director',
      /* tslint:disable-next-line:max-line-length */
      description: 'Supervised music, media, and web services for the congregation. Built <a href="http://christchurchdavenport.org">christchurchdavenport.org</a> on Squarespace.',
      startDate: new Date(2012, 5),
      endDate: new Date(2013, 1),
      city: 'Davenport',
      state: 'Iowa'
    },
    {
      company: 'SimpleDelta, LLC',
      title: 'Vice-President/Co-Founder',
      description: 'Co-founded a company trying to build a web app to help independent auto mechanics offer services online.',
      startDate: new Date(2010, 11),
      endDate: new Date(2012, 5),
      city: 'Bellingham',
      state: 'Washington'
    },
    {
      company: 'ShareNow, Inc',
      title: 'Project Coordinator',
      description: 'Joined a startup looking to create social media strategies for non-profits, working on multiple projects.',
      startDate: new Date(2009, 1),
      endDate: new Date(2010, 7),
      city: 'Bellingham',
      state: 'Washington'
    },
    {
      company: 'Northwest University',
      title: 'Associate Director of Media Services & Adjunct Faculty',
      description: 'Oversee all recorded media for Northwest University, producing multiple full-length albums. Taught a music technology course.',
      startDate: new Date(2007, 7),
      endDate: new Date(2009, 5),
      city: 'Kirkland',
      state: 'Washington'
    },
    {
      company: 'Courtyard by Marriott',
      title: 'Front Desk Supervisor',
      description: 'Helped with front-office operations, working with other agents to ensure an excellent customer service for the guest.',
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
