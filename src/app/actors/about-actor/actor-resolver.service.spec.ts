/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActorResolverService } from './actor-resolver.service';

describe('Service: ActorResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorResolverService]
    });
  });

  it('should ...', inject([ActorResolverService], (service: ActorResolverService) => {
    expect(service).toBeTruthy();
  }));
});
