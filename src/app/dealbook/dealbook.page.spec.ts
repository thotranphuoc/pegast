import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealbookPage } from './dealbook.page';

describe('DealbookPage', () => {
  let component: DealbookPage;
  let fixture: ComponentFixture<DealbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
