/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckIsTheatreDataAddeedService } from './checkIsTheatreDataAddeed.service';

describe('Service: CheckIsTheatreDataAddeed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckIsTheatreDataAddeedService]
    });
  });

  it('should ...', inject([CheckIsTheatreDataAddeedService], (service: CheckIsTheatreDataAddeedService) => {
    expect(service).toBeTruthy();
  }));
});
