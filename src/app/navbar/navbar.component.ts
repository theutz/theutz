import { Observable } from 'rxjs/Rx';
import { CollapseDirective } from 'ng2-bootstrap/collapse';
import { NavbarLinksService } from '../services/navbar-links.service';
import { NavbarLink } from './navbar-link';
import { HostListener, Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  links: NavbarLink[] = [];

  constructor(
    private _navLinkService: NavbarLinksService,
  ) { }

  ngOnInit() {
    this._navLinkService.links$.subscribe(link => this.links.push(link));
  }

  toggleNavbar(event: Event): void {
    event.preventDefault();
    this.isCollapsed = !this.isCollapsed;
  }

}

