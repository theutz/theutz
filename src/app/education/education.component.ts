import { NavbarLinksService } from '../navbar-links.service';
import { EducationItem } from '../EducationItem';
import { EducationService } from '../education.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  items: EducationItem[] = [];

  constructor(
    private _edService: EducationService,
    private _navbarLink: NavbarLinksService
  ) { }

  ngOnInit() {
    this._navbarLink.addLink({ id: 'education', label: 'Education' });
    this._edService.items$
      .subscribe(item => {
        this.items.push(item);
        this.items.sort((a, b) => a.graduationDate < b.graduationDate ? 1 : 0);
      });
  }

}
