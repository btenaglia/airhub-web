import { TestBed } from '@angular/core/testing';

import { ObserversService } from './observers.service';

describe('ObserversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObserversService = TestBed.get(ObserversService);
    expect(service).toBeTruthy();
  });
});
