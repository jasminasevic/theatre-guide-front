/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HomePageSearchService } from './homePageSearch.service';

describe('Service: HomePageSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomePageSearchService]
    });
  });

  it('should ...', inject([HomePageSearchService], (service: HomePageSearchService) => {
    expect(service).toBeTruthy();
  }));
});
