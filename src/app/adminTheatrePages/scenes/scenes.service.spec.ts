/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ScenesService } from './scenes.service';

describe('Service: Scenes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScenesService]
    });
  });

  it('should ...', inject([ScenesService], (service: ScenesService) => {
    expect(service).toBeTruthy();
  }));
});
