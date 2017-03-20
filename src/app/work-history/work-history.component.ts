import { WorkHistoryItem, WorkHistoryService } from '../work-history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  history: WorkHistoryItem[] = [];

  constructor(
    private _historyService: WorkHistoryService
  ) { }

  ngOnInit() {
    this._historyService.history$.subscribe(item => this.history.push(item));
  }

}
