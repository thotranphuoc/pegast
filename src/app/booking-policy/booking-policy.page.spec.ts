import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPolicyPage } from './booking-policy.page';

describe('BookingPolicyPage', () => {
  let component: BookingPolicyPage;
  let fixture: ComponentFixture<BookingPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingPolicyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
