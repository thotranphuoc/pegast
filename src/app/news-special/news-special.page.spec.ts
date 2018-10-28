import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSpecialPage } from './news-special.page';

describe('NewsSpecialPage', () => {
  let component: NewsSpecialPage;
  let fixture: ComponentFixture<NewsSpecialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSpecialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSpecialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
