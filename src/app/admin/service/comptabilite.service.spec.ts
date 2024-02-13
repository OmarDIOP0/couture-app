import { TestBed } from '@angular/core/testing';

import { ComptabiliteService } from './comptabilite.service';

describe('ComptabiliteService', () => {
  let service: ComptabiliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptabiliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
