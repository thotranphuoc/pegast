import { Component, OnInit } from '@angular/core';
import { PegasService } from '../services/pegas.service';

@Component({
  selector: 'app-voucher-wallet',
  templateUrl: './voucher-wallet.page.html',
  styleUrls: ['./voucher-wallet.page.scss'],
})
export class VoucherWalletPage implements OnInit {
  VOUCHERS;
  constructor(
    private pegasService: PegasService
  ) { }

  ngOnInit() {
    this.getVoucherWallets();
  }

  getVoucherWallets(){
    let USER_ID = '17';
    this.pegasService.voucherWalletsGetWithPostMethod(USER_ID)
    .subscribe((res: any)=>{
      console.log(res);
      this.VOUCHERS = res.data;
    })
  }

}
