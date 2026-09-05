import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDetails } from './save-details';

describe('SaveDetails', () => {
  let component: SaveDetails;
  let fixture: ComponentFixture<SaveDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SaveDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
