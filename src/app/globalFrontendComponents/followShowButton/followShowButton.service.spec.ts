/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { FollowShowButtonService } from './followShowButton.service';

describe('Service: FollowShowButton', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowShowButtonService]
    });
  });

  it('should ...', inject([FollowShowButtonService], (service: FollowShowButtonService) => {
    expect(service).toBeTruthy();
  }));
});
