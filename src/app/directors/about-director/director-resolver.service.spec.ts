/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { DirectorResolverService } from './director-resolver.service';

describe('Service: DirectorResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectorResolverService]
    });
  });

  it('should ...', inject([DirectorResolverService], (service: DirectorResolverService) => {
    expect(service).toBeTruthy();
  }));
});
