import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalComment } from './personal-comment';

describe('PersonalComment', () => {
  let component: PersonalComment;
  let fixture: ComponentFixture<PersonalComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalComment],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalComment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
