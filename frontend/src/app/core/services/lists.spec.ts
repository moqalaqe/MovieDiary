import { TestBed } from '@angular/core/testing';

import { Lists } from './lists';

describe('ListDetails', () => {
  let service: Lists;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lists);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
