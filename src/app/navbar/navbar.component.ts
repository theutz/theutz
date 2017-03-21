import { NavbarLink, NavbarLinksService } from '../navbar-links.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: NavbarLink[] = [];

  constructor(
    private _navLinkService: NavbarLinksService
  ) { }

  ngOnInit() {
    this._navLinkService.links$.subscribe(link => this.links.push(link));
  }

}

