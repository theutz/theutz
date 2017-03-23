import { WorkHistoryItem } from '../work-history.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent implements OnInit {
  @Input() item: WorkHistoryItem;
  @Input() collapseBody = true;

  constructor() { }

  ngOnInit() {
  }

}
