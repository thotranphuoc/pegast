import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelJournalPage } from './travel-journal.page';

describe('TravelJournalPage', () => {
  let component: TravelJournalPage;
  let fixture: ComponentFixture<TravelJournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelJournalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelJournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
