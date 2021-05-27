/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { TheatreResolverService } from './theatre-resolver.service';

describe('Service: TheatreResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheatreResolverService]
    });
  });

  it('should ...', inject([TheatreResolverService], (service: TheatreResolverService) => {
    expect(service).toBeTruthy();
  }));
});
