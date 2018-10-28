import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightHotelPage } from './flight-hotel.page';

describe('FlightHotelPage', () => {
  let component: FlightHotelPage;
  let fixture: ComponentFixture<FlightHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightHotelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
