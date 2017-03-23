import { WorkHistoryItem } from '../work-history.service';
import { animate, Component, Input, OnInit, state, style, transition, trigger } from '@angular/core';

let collapsedBodyStyle = style({
  height: 0,
  padding: 0,
  opacity: 0,
  transform: 'scaleY(0)',
  'transform-origin': '100% 0%'
});

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss'],
  animations: [
    trigger('collapse', [
      // state('true', style({ opacity: 0, transform: 'scaleY(0)' })),
      // state('false', style({ opacity: 1, transform: 'scaleY(1)' })),
      transition('void => *', [collapsedBodyStyle, animate('1s ease')]),
      transition('* => void', animate('1s ease', collapsedBodyStyle)),
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
