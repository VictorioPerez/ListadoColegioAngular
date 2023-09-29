import { TestBed } from '@angular/core/testing';

import { ServiceColegioService } from './service-colegio.service';

describe('ServiceColegioService', () => {
  let service: ServiceColegioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceColegioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
