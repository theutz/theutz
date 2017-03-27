import { Subscription } from 'rxjs/Rx';
import { WorkHistoryItem } from './work-history-item';
import { WorkHistoryService } from '../services/work-history.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit, OnDestroy {
  sectionId = 'work-history';
  history: WorkHistoryItem[] = [];
  hideAll = true;

  private _historySub: Subscription;

  constructor(
    private _historyService: WorkHistoryService,
  ) { }

  ngOnInit() {
    this._historySub = this._historyService.history$
      .subscribe(item => this.history.push(item));
  }

  ngOnDestroy() {
    this._historySub.unsubscribe();
  }
}
