import { TestBed } from '@angular/core/testing';

import { GlobaisService } from './globais.service';

describe('GlobaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobaisService = TestBed.get(GlobaisService);
    expect(service).toBeTruthy();
  });
});
