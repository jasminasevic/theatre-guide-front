/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { UpcomingShowsService } from './UpcomingShows.service';

describe('Service: UpcomingShows', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingShowsService]
    });
  });

  it('should ...', inject([UpcomingShowsService], (service: UpcomingShowsService) => {
    expect(service).toBeTruthy();
  }));
});
