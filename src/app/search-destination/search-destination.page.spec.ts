import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDestinationPage } from './search-destination.page';

describe('SearchDestinationPage', () => {
  let component: SearchDestinationPage;
  let fixture: ComponentFixture<SearchDestinationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDestinationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDestinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
