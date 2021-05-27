/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ConvertDateService } from './convert-date.service';

describe('Service: ConvertDate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertDateService]
    });
  });

  it('should ...', inject([ConvertDateService], (service: ConvertDateService) => {
    expect(service).toBeTruthy();
  }));
});
