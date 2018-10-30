import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';
import { NavParService } from '../nav-par.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hot-deals',
  templateUrl: './hot-deals.page.html',
  styleUrls: ['./hot-deals.page.scss'],
})
export class HotDealsPage implements OnInit {
  DEALS = [];
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navPar: NavParService
  ) { }

  ngOnInit() {
    this.getHotDeals();
  }

  getHotDeals() {
    this.pegasService.hotDealsGetWithPostMethod()
      .subscribe((res: any) => {
        console.log(res);
        this.DEALS = [];
        this.DEALS = res.data;
        console.log(this.DEALS);
      })
  }

  go2HotdealDeail(DEAL) {
    this.navCtrl.navigateForward('/hotdeal');
    this.navPar.setter(DEAL);
  }

}
