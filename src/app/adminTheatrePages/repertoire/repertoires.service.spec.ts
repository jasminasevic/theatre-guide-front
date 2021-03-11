/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepertoiresService } from './repertoires.service';

describe('Service: Repertoires', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepertoiresService]
    });
  });

  it('should ...', inject([RepertoiresService], (service: RepertoiresService) => {
    expect(service).toBeTruthy();
  }));
});
