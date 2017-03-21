import { NavbarLinksService } from '../navbar-links.service';
import { WorkHistoryItem, WorkHistoryService } from '../work-history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  sectionId = 'work-history';
  history: WorkHistoryItem[] = [];
  hideAll = true;

  constructor(
    private _historyService: WorkHistoryService,
    private _navLinkService: NavbarLinksService
  ) { }

  ngOnInit() {
    this._navLinkService
      .addLink({ label: 'History', id: this.sectionId });
    this._historyService.history$
      .subscribe(item => this.history.push(item));
  }

  toggleAll() {
    this.hideAll = !this.hideAll;
  }

  toggleBlock(block: any) {
    console.log(block);
    // block.toggle();
  }

}
