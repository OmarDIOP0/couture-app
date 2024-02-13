import { TestBed } from '@angular/core/testing';

import { StockApiService } from './stock-api.service';

describe('StockApiService', () => {
  let service: StockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
