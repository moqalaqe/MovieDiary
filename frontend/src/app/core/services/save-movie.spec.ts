import { TestBed } from '@angular/core/testing';

import { SaveMovie } from './save-movie';

describe('SaveMovie', () => {
  let service: SaveMovie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveMovie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
