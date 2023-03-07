import { TestBed } from '@angular/core/testing';

import { CustomeValidatoreService } from './custome-validatore.service';

describe('CustomeValidatoreService', () => {
  let service: CustomeValidatoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomeValidatoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
