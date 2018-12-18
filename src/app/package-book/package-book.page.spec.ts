import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBookPage } from './package-book.page';

describe('PackageBookPage', () => {
  let component: PackageBookPage;
  let fixture: ComponentFixture<PackageBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
