/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { PurchasesService } from './purchases.service';

describe('Service: Purchases', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchasesService]
    });
  });

  it('should ...', inject([PurchasesService], (service: PurchasesService) => {
    expect(service).toBeTruthy();
  }));
});
