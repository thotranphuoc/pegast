import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdealsPage } from './hotdeals.page';

describe('HotdealsPage', () => {
  let component: HotdealsPage;
  let fixture: ComponentFixture<HotdealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotdealsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
