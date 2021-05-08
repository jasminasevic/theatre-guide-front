/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllPurchasesResolverService } from './all-purchases-resolver.service';

describe('Service: AllPurchasesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllPurchasesResolverService]
    });
  });

  it('should ...', inject([AllPurchasesResolverService], (service: AllPurchasesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
