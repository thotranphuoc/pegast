import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PegasService } from '../pegas.service';
import { NavParService } from '../nav-par.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  data;
  SHOP;
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navParService: NavParService
  ) {
    this.data = this.navParService.getter();
    console.log(this.data);
  }
  ngOnInit() {
    // this.getHotdeals();
    this.getShopDetail();
  }

  getShopDetail() {
    this.pegasService.shopDetailGetWithPostMethod(this.data.id)
      .subscribe((res: any) => {
        console.log(res);
        this.SHOP = res.data;
      })
  }

}
