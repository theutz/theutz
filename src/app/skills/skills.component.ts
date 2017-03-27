import { Subscription } from 'rxjs/Rx';
import { SkillsService } from '../services/skills.service';
import { Skill } from './skill';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  chartColor = '#709795';
  skills: Skill[] = [];
  sectionId = 'skills';

  private _skilSub: Subscription;

  constructor(
    private _skillsService: SkillsService,
  ) { }

  ngOnInit() {
    this._skilSub = this._skillsService.skills$
      .subscribe(skill => this.skills.push(skill));
  }

  ngOnDestroy() {
    this._skilSub.unsubscribe();
  }
}