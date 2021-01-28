import { TestBed } from '@angular/core/testing';

import { SummaryPipeService } from './summary.pipe.service';

describe('Summary.PipeService', () => {
  let service: SummaryPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaryPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
