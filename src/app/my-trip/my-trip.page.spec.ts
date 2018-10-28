import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripPage } from './my-trip.page';

describe('MyTripPage', () => {
  let component: MyTripPage;
  let fixture: ComponentFixture<MyTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
