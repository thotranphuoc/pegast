import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesxPage } from './packagesx.page';

describe('PackagesxPage', () => {
  let component: PackagesxPage;
  let fixture: ComponentFixture<PackagesxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
