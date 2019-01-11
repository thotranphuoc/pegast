import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdealSliderComponent } from './hotdeal-slider.component';

describe('HotdealSliderComponent', () => {
  let component: HotdealSliderComponent;
  let fixture: ComponentFixture<HotdealSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotdealSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdealSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
