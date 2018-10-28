import { TestBed } from '@angular/core/testing';

import { NavParService } from './nav-par.service';

describe('NavParService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavParService = TestBed.get(NavParService);
    expect(service).toBeTruthy();
  });
});
