/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { PopularShowsVerticalService } from './PopularShowsVertical.service';

describe('Service: PopularShowsVertical', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopularShowsVerticalService]
    });
  });

  it('should ...', inject([PopularShowsVerticalService], (service: PopularShowsVerticalService) => {
    expect(service).toBeTruthy();
  }));
});
