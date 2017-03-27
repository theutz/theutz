import { WorkHistoryItem } from '../work-history/work-history-item';
import { Component, Output, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
})
export class HistoryItemComponent implements OnInit {
  @Input() item: WorkHistoryItem;
  @Input()
  get collapseBody() { return this.isCollapsed; };
  set collapseBody(value: boolean) { this.isCollapsed = value; }

  @HostBinding('class.align-self-start')
  get alignCenter() { return this.isCollapsed; }

  @HostBinding('class.align-self-stretch')
  get alignStretch() { return !this.isCollapsed; }

  isCollapsed = false;

  constructor() { }

  ngOnInit() { }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
