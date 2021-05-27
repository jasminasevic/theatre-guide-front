/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { UpcomingPremieresService } from './UpcomingPremieres.service';

describe('Service: UpcomingPremieres', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingPremieresService]
    });
  });

  it('should ...', inject([UpcomingPremieresService], (service: UpcomingPremieresService) => {
    expect(service).toBeTruthy();
  }));
});
