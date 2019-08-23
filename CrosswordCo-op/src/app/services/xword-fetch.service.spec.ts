import { TestBed } from '@angular/core/testing';

import { XwordFetchService } from './xword-fetch.service';

describe('XwordFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XwordFetchService = TestBed.get(XwordFetchService);
    expect(service).toBeTruthy();
  });
});
