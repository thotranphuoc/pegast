import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDetailViewPage } from './deal-detail-view.page';

describe('DealDetailViewPage', () => {
  let component: DealDetailViewPage;
  let fixture: ComponentFixture<DealDetailViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDetailViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDetailViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
