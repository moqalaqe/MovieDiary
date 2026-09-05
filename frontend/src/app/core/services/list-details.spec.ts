import { TestBed } from '@angular/core/testing';

import { ListDetails } from './list-details';

describe('ListDetails', () => {
  let service: ListDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
