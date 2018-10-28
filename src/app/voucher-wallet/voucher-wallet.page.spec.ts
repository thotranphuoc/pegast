import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherWalletPage } from './voucher-wallet.page';

describe('VoucherWalletPage', () => {
  let component: VoucherWalletPage;
  let fixture: ComponentFixture<VoucherWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherWalletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
