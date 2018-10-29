import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationGuidesPage } from './destination-guides.page';

describe('DestinationGuidesPage', () => {
  let component: DestinationGuidesPage;
  let fixture: ComponentFixture<DestinationGuidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationGuidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationGuidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
