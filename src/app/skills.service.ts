import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillsService {

  skillSrc: ReplaySubject<Skill> = new ReplaySubject<Skill>();
  skills$: Observable<Skill>;

  constructor() {
    this.skills$ = this.skillSrc.asObservable();

    this._defaultSkills()
      .map(skill => this.skillSrc.next(skill));
  }

  private _defaultSkills(): Skill[] {
    return [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 95 },
      { name: 'JS', level: 85 },
      { name: 'Sass', level: 85 },
      { name: 'PHP', level: 75 },
      { name: 'C#', level: 50 },
      { name: 'SQL', level: 35 },
    ];
  }
}

export interface Skill {
  name: string;
  level: number;
}
