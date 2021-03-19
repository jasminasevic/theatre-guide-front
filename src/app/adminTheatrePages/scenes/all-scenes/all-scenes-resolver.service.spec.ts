/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllScenesResolverService } from './all-scenes-resolver.service';

describe('Service: AllScenesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllScenesResolverService]
    });
  });

  it('should ...', inject([AllScenesResolverService], (service: AllScenesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
