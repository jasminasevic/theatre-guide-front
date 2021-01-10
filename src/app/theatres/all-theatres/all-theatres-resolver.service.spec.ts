/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllTheatresResolverService } from './all-theatres-resolver.service';

describe('Service: AllTheatresResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllTheatresResolverService]
    });
  });

  it('should ...', inject([AllTheatresResolverService], (service: AllTheatresResolverService) => {
    expect(service).toBeTruthy();
  }));
});
