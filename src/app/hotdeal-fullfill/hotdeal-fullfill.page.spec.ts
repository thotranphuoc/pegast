import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdealFullfillPage } from './hotdeal-fullfill.page';

describe('HotdealFullfillPage', () => {
  let component: HotdealFullfillPage;
  let fixture: ComponentFixture<HotdealFullfillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotdealFullfillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdealFullfillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
