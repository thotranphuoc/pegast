import { TestBed } from '@angular/core/testing';

import { PegastService } from './pegast.service';

describe('PegastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PegastService = TestBed.get(PegastService);
    expect(service).toBeTruthy();
  });
});
