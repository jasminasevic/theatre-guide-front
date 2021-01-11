/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllDirectorsResolverService } from './all-directors-resolver.service';

describe('Service: AllDirectorsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllDirectorsResolverService]
    });
  });

  it('should ...', inject([AllDirectorsResolverService], (service: AllDirectorsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
