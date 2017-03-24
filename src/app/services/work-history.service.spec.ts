/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkHistoryService } from './work-history.service';

describe('WorkHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkHistoryService]
    });
  });

  it('should ...', inject([WorkHistoryService], (service: WorkHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
