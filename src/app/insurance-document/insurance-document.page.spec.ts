import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDocumentPage } from './insurance-document.page';

describe('InsuranceDocumentPage', () => {
  let component: InsuranceDocumentPage;
  let fixture: ComponentFixture<InsuranceDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceDocumentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
