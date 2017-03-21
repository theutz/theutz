import { NavbarLinksService } from '../navbar-links.service';
import { Component, OnInit } from '@angular/core';
import { Skill, SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  chartColor = '#709795';
  skills: Skill[] = [];
  sectionId = 'skills';

  constructor(
    private _skillsService: SkillsService,
    private _navLinkService: NavbarLinksService
  ) { }

  ngOnInit() {
    this._navLinkService.addLink({ label: 'Skills', id: this.sectionId });
    this._skillsService.skills$
      .subscribe(skill => this.skills.push(skill));
  }

}