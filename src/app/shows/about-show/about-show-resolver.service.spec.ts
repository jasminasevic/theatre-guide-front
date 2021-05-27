/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AboutShowResolverService } from './about-show-resolver.service';

describe('Service: AboutShowResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutShowResolverService]
    });
  });

  it('should ...', inject([AboutShowResolverService], (service: AboutShowResolverService) => {
    expect(service).toBeTruthy();
  }));
});
