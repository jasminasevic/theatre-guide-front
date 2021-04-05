/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShowFollowersService } from './show-followers.service';

describe('Service: ShowFollowers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowFollowersService]
    });
  });

  it('should ...', inject([ShowFollowersService], (service: ShowFollowersService) => {
    expect(service).toBeTruthy();
  }));
});
