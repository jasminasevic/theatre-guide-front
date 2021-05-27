/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ProfileService } from './profile.service';

describe('Service: Profile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService]
    });
  });

  it('should ...', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
