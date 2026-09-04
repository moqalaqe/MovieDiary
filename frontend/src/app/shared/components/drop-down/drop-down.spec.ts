import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDown } from './drop-down';

describe('MyRating', () => {
  let component: DropDown;
  let fixture: ComponentFixture<DropDown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDown],
    }).compileComponents();

    fixture = TestBed.createComponent(DropDown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
