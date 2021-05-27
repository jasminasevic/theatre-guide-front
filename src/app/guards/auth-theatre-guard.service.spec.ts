/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AuthTheatreGuardService } from './auth-theatre-guard.service';

describe('Service: AuthTheatreGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTheatreGuardService]
    });
  });

  it('should ...', inject([AuthTheatreGuardService], (service: AuthTheatreGuardService) => {
    expect(service).toBeTruthy();
  }));
});
