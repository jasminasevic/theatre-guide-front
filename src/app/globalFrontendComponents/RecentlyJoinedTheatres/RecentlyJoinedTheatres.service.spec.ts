/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { RecentlyJoinedTheatresService } from './RecentlyJoinedTheatres.service';

describe('Service: RecentlyJoinedTheatres', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecentlyJoinedTheatresService]
    });
  });

  it('should ...', inject([RecentlyJoinedTheatresService], (service: RecentlyJoinedTheatresService) => {
    expect(service).toBeTruthy();
  }));
});
