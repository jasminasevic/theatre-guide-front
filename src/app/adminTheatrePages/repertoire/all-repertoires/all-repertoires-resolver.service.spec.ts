/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AllRepertoiresResolverService } from './all-repertoires-resolver.service';

describe('Service: AllRepertoiresResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllRepertoiresResolverService]
    });
  });

  it('should ...', inject([AllRepertoiresResolverService], (service: AllRepertoiresResolverService) => {
    expect(service).toBeTruthy();
  }));
});
