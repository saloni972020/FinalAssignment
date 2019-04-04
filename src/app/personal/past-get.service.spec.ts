import { TestBed } from '@angular/core/testing';

import { PastGetService } from './past-get.service';

describe('PastGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PastGetService = TestBed.get(PastGetService);
    expect(service).toBeTruthy();
  });
});
