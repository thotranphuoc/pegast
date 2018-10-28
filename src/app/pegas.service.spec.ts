import { TestBed } from '@angular/core/testing';

import { PegasService } from './pegas.service';

describe('PegasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PegasService = TestBed.get(PegasService);
    expect(service).toBeTruthy();
  });
});
