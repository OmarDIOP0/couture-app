import { TestBed } from '@angular/core/testing';

import { BoutiqueApiService } from './boutique-api.service';

describe('BoutiqueApiService', () => {
  let service: BoutiqueApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoutiqueApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
