/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ContactUsService } from './contact-us.service';

describe('Service: ContactUs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactUsService]
    });
  });

  it('should ...', inject([ContactUsService], (service: ContactUsService) => {
    expect(service).toBeTruthy();
  }));
});
