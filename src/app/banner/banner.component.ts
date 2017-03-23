import { Observable } from 'rxjs/Rx';
import { animate, Component, Input, OnInit, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('title', [
      state('out', style({
        'filter': 'blur(12px)',
        'opacity': 0,
      })),
      state('in', style({
        'filter': 'blur(0px)',
        'opacity': 1,
      })),
      transition('out <=> in', animate('2s ease-in'))
    ]),
    trigger('showImage', [
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1s')
      ]),
      transition('* => void', animate('1s', style({
        opacity: 0
      }))
      ),
    ])
  ]
})
export class BannerComponent implements OnInit {
  @Input() title: string;

  roles: string[] = ['Developer', 'Designer', 'Entrepreneur'];

  titleState = 'out';

  constructor() { }

  ngOnInit() {
    this._delayAnimation();
  }

  private _delayAnimation() {
    Observable.timer(1500)
      .take(1)
      .subscribe(() => this.titleState = 'in');
  }
}
