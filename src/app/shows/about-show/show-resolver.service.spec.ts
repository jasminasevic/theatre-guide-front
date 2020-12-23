/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShowResolverService } from './show-resolver.service';

describe('Service: ShowResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowResolverService]
    });
  });

  it('should ...', inject([ShowResolverService], (service: ShowResolverService) => {
    expect(service).toBeTruthy();
  }));
});
