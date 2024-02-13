import { TestBed } from '@angular/core/testing';

import { MesBoutiquesApiService } from './mes-boutiques-api.service';

describe('MesBoutiquesApiService', () => {
  let service: MesBoutiquesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesBoutiquesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
