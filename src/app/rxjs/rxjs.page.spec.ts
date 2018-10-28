import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPage } from './rxjs.page';

describe('RxjsPage', () => {
  let component: RxjsPage;
  let fixture: ComponentFixture<RxjsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
