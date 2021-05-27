/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { CategoriesService } from './Categories.service';

describe('Service: Categories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesService]
    });
  });

  it('should ...', inject([CategoriesService], (service: CategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
