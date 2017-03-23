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
    private _edService: EducationService
  ) { }

  ngOnInit() {
    this._edService.items$
      // .finally(() => console.log(this.items))
      .subscribe(item => {
        this.items.push(item);
        this.items.sort((a, b) => a.graduationDate < b.graduationDate ? 1 : 0);
      });
  }

}
