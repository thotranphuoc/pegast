import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';
import { NavParService } from '../nav-par.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.page.html',
  styleUrls: ['./hotdeals.page.scss'],
})
export class HotdealsPage implements OnInit {

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

        this.DEALS = this.DEALS.filter(deal=> deal.addtohotdeal =='1')
        console.log(this.DEALS);
      })
  }

  go2HotdealDeail(DEAL) {
    this.navCtrl.navigateForward('/deal/'+DEAL.id);
    this.navPar.setter(DEAL);
  }
}
