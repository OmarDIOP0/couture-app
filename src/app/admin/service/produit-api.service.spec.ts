import { TestBed } from '@angular/core/testing';

import { ProduitApiService } from './produit-api.service';

describe('ProduitApiService', () => {
  let service: ProduitApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
