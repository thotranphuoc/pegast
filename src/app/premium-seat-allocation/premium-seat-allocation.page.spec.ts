import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumSeatAllocationPage } from './premium-seat-allocation.page';

describe('PremiumSeatAllocationPage', () => {
  let component: PremiumSeatAllocationPage;
  let fixture: ComponentFixture<PremiumSeatAllocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumSeatAllocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumSeatAllocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
