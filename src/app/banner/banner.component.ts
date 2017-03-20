import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() title: string;
  roles: string[] = ['Developer', 'Designer'];

  constructor() { }

  ngOnInit() {
  }

}
