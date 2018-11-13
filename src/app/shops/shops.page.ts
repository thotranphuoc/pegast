import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PegasService } from '../pegas.service';
import { NavParService } from '../nav-par.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage implements OnInit {

  SHOPS = [];
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navParService: NavParService
  ) { }
  ngOnInit() {
    this.getShops();
  }

  getShops() {
    this.pegasService.shopsGetWithPostMethod()
      .subscribe((res: any) => {
        console.log(res);
        this.SHOPS = res.data;
      })
  }

  go2Shop(SHOP) {
    this.navCtrl.navigateForward('/shop')
    this.navParService.setter(SHOP);
  }
}
