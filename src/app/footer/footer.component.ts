import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  profiles: Array<{ title: string, url: string, icon: string }> = [];
  thisYear: string;

  constructor() { }

  ngOnInit() {
    this.thisYear = new Date().getFullYear().toString();
    this._addProfiles();
  }

  private _addProfiles() {
    this.profiles.push({ title: 'Facebook', url: 'http://facebook.com/theutz', icon: 'facebook' });
    this.profiles.push({ title: 'Twitter', url: 'http://twitter.com/theutz', icon: 'twitter' });
    this.profiles.push({ title: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/michael-utz-01532259' });
    this.profiles.push({ title: 'Instgram', icon: 'instagram', url: 'http://instagram.com/theutz' });
    this.profiles.push({ title: 'GitHub', icon: 'github', url: 'http://github.com/theutz' });
    this.profiles.push({ title: 'Stack Overflow', icon: 'stack-overflow', url: 'https://stackoverflow.com/users/3162006/theutz' });
  }
}
