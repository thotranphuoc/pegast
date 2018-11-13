import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-hotel-voucher',
  templateUrl: './hotel-voucher.page.html',
  styleUrls: ['./hotel-voucher.page.scss'],
})
export class HotelVoucherPage implements OnInit {
  HOTELVOUCHERS: any[] = [];
  constructor(
    private pegasService: PegasService
  ) { }

  ngOnInit() {
    this.pegasService.insuranceGet('1','0')
    .subscribe((res: any)=>{
      this.HOTELVOUCHERS = res.data;
      console.log(this.HOTELVOUCHERS);
    })
  }

  open_pdf(ITEM){
    window.open(ITEM.file);
  }

}
