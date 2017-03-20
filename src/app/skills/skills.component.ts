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

  constructor(
    private _skillsService: SkillsService
  ) { }

  ngOnInit() {
    this._skillsService.skills$.subscribe(skill => this.skills.push(skill));
  }

}