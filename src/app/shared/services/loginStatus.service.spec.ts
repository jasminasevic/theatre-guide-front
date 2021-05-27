/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { LoginStatusService } from './loginStatus.service';

describe('Service: LoginStatus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginStatusService]
    });
  });

  it('should ...', inject([LoginStatusService], (service: LoginStatusService) => {
    expect(service).toBeTruthy();
  }));
});
