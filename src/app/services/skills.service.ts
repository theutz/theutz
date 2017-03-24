import { Skill } from '../skills/skill';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { defaultSkills } from '../skills/default-skills';

@Injectable()
export class SkillsService {
  private _src: ReplaySubject<Skill> = new ReplaySubject<Skill>();
  skills$: Observable<Skill>;

  constructor() {
    this.skills$ = this._src.asObservable();

    defaultSkills
      .map(skill => this._src.next(skill));
  }
}
