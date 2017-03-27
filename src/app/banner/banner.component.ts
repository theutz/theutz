import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as animations from '../animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [animations.componentTransition]
})
export class BannerComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  roles: string[] = ['Developer', 'Designer', 'Entrepreneur'];

  constructor() { }

  ngOnInit() {
  }
}
