import { TestBed } from '@angular/core/testing';

import { CommandeApiService } from './commande-api.service';

describe('CommandeApiService', () => {
  let service: CommandeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
