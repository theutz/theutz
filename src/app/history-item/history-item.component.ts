import { HostBinding } from '@angular/core';
import { WorkHistoryItem } from '../work-history/work-history-item';
import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
  animations: [
    trigger('collapse', [
      transition('void => *', [
        style({ opacity: 0, height: 0, padding: 0 }),
        animate('150ms ease-out')
      ]),
      transition('* => void', [
        animate('150ms ease-in', style({ opacity: 0, height: 0, padding: 0 }))
      ])
    ])
  ]
})
export class HistoryItemComponent implements OnInit {
  @Input() item: WorkHistoryItem;
  @Input() collapse = false;
  @HostBinding('class.align-self-start') alignSelf: boolean;

  constructor() { }

  ngOnInit() {
    this.setAlignment();
  }

  toggle() {
    this.collapse = !this.collapse;
  }

  setAlignment() {
    this.alignSelf = !this.collapse;
  }
}
