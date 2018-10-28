import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDealsPage } from './hot-deals.page';

describe('HotDealsPage', () => {
  let component: HotDealsPage;
  let fixture: ComponentFixture<HotDealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotDealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
