import { TestBed } from '@angular/core/testing';

import { CartCardCounterService } from './cart-card-counter.service';

describe('CartCardCounterService', () => {
  let service: CartCardCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCardCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
