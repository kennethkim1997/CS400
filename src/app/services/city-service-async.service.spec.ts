import { TestBed } from '@angular/core/testing';

import { CityServiceAsyncService } from './city-service-async.service';

describe('CityServiceAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityServiceAsyncService = TestBed.get(CityServiceAsyncService);
    expect(service).toBeTruthy();
  });
});
