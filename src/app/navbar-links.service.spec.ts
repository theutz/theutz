/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavbarLinksService } from './navbar-links.service';

describe('NavbarLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarLinksService]
    });
  });

  it('should ...', inject([NavbarLinksService], (service: NavbarLinksService) => {
    expect(service).toBeTruthy();
  }));
});
