/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllActorsResolverService } from './all-actors-resolver.service';

describe('Service: AllActorsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllActorsResolverService]
    });
  });

  it('should ...', inject([AllActorsResolverService], (service: AllActorsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
