import { TestBed, inject } from '@angular/core/testing';

import { IsWatchValidService } from './is-watch-valid.service';

describe('IsWatchValidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsWatchValidService]
    });
  });

  it('should be created', inject([IsWatchValidService], (service: IsWatchValidService) => {
    expect(service).toBeTruthy();
  }));
});
