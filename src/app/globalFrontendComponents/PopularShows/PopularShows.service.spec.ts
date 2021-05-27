/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { PopularShowsService } from './PopularShows.service';

describe('Service: PopularShows', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularShowsService]
    });
  });

  it('should ...', inject([PopularShowsService], (service: PopularShowsService) => {
    expect(service).toBeTruthy();
  }));
});
