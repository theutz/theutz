import { Subscription } from 'rxjs/Rx';
import { EducationItem } from './education-item';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
  items: EducationItem[] = [];

  private _edSub: Subscription;

  constructor(
    private _edService: EducationService,
  ) { }

  ngOnInit() {
    this._edSub = this._edService.items$
      .subscribe(item => {
        this.items.push(item);
        this.items.sort((a, b) => a.graduationDate < b.graduationDate ? 1 : 0);
      });
  }

  ngOnDestroy() {
    this._edSub.unsubscribe();
  }
}
