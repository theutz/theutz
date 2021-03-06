import { Observable } from 'rxjs/Rx';
import { CollapseDirective } from 'ng2-bootstrap/collapse';
import { HostListener, Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  links: Array<{ title: string, route: string }> = [];

  @HostListener('window:click', ['$event'])
  onWindowClick(event) {
    if (event.target.id !== 'navbar-toggler' && !this.isCollapsed) {
      this.toggleNavbar();
    }
  }

  constructor() { }

  ngOnInit() {
    this._setLinks();
  }

  toggleNavbar(event?: Event): void {
    if (!!event) {
      event.preventDefault();
    }
    this.isCollapsed = !this.isCollapsed;
  }

  private _setLinks() {
    this.links.push({ title: 'Home', route: '/home' });
    this.links.push({ title: 'Skills', route: '/skills' });
    this.links.push({ title: 'Work History', route: '/work-history' });
    this.links.push({ title: 'Education', route: '/education' });
    this.links.push({ title: 'Portfolio', route: '/portfolio' });
  }
}

