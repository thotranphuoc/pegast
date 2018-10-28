import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsSearchPage } from './hotels-search.page';

describe('HotelsSearchPage', () => {
  let component: HotelsSearchPage;
  let fixture: ComponentFixture<HotelsSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
