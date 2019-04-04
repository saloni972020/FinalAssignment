import { TestBed } from '@angular/core/testing';

import { FaqsGetService } from './faqs-get.service';

describe('FaqsGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaqsGetService = TestBed.get(FaqsGetService);
    expect(service).toBeTruthy();
  });
});
