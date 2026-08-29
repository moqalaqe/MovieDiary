import { TestBed } from '@angular/core/testing';

import { SearchMovie } from './search-movie';

describe('SearchMovie', () => {
  let service: SearchMovie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMovie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
