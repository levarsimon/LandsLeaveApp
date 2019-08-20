import { TestBed } from '@angular/core/testing';

import { LeaveTakenService } from './leave-taken.service';

describe('LeaveTakenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaveTakenService = TestBed.get(LeaveTakenService);
    expect(service).toBeTruthy();
  });
});
