/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { FollowedShowsResolverService } from './followed-shows-resolver.service';

describe('Service: FollowedShowsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowedShowsResolverService]
    });
  });

  it('should ...', inject([FollowedShowsResolverService], (service: FollowedShowsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
