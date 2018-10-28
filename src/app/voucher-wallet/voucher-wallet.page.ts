import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-voucher-wallet',
  templateUrl: './voucher-wallet.page.html',
  styleUrls: ['./voucher-wallet.page.scss'],
})
export class VoucherWalletPage implements OnInit {

  constructor(
    private pegasService: PegasService
  ) { }

  ngOnInit() {
  }

  getVoucherWallets(){
    let USER_ID = '';
    this.pegasService.voucherWalletsGetWithPostMethod(USER_ID)
    .subscribe((res: any)=>{
      console.log(res);
    })
  }

}
