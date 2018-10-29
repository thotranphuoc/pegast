import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalMapPage } from './local-map.page';

describe('LocalMapPage', () => {
  let component: LocalMapPage;
  let fixture: ComponentFixture<LocalMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
