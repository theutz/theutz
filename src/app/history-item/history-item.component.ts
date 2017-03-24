import { WorkHistoryItem } from '../work-history/work-history-item';
import { animate, Component, Input, OnInit, state, style, transition, trigger } from '@angular/core';
import * as aniStyles from './animation-styles';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
  animations: [
    trigger('collapse', [
      transition('void => *', [aniStyles.collapsedBody, animate('1s ease')]),
      transition('* => void', animate('1s ease', aniStyles.collapsedBody)),
    ])
  ]
})
export class HistoryItemComponent implements OnInit {
  @Input() item: WorkHistoryItem;
  @Input() collapse = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.collapse = !this.collapse;
  }
}
