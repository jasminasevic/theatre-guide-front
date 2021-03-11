/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
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
