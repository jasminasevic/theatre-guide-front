/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AllShowsResolverService } from './all-shows-resolver.service';

describe('Service: AllShowsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllShowsResolverService]
    });
  });

  it('should ...', inject([AllShowsResolverService], (service: AllShowsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
