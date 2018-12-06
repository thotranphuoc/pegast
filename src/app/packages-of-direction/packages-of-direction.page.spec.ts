import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesOfDirectionPage } from './packages-of-direction.page';

describe('PackagesOfDirectionPage', () => {
  let component: PackagesOfDirectionPage;
  let fixture: ComponentFixture<PackagesOfDirectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesOfDirectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesOfDirectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
