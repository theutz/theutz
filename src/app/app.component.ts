import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Michael Utz';

  constructor(
    private _ts: Title
  ) { }

  ngOnInit() {
    this._ts.setTitle(this.title);
  }
}
