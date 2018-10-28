import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';
import { iDeal } from '../interface/pegas.interface';
import { NavController } from '@ionic/angular';
import { NavParService } from '../nav-par.service';

@Component({
  selector: 'app-news-special',
  templateUrl: './news-special.page.html',
  styleUrls: ['./news-special.page.scss'],
})
export class NewsSpecialPage implements OnInit {
  DEALS: iDeal[] = [];
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navPar: NavParService) { }

  ngOnInit() {
    this.getHotdeals();
  }

  getHotdeals() {
    this.pegasService.getHotdeal()
      .subscribe((res: any) => {
        console.log(res);
        this.DEALS = res.data;
        console.log(this.DEALS);
      })
    this.pegasService.dealsGetWithPostMethod()
      .subscribe((res: any) => {
        console.log(res);
        // this.DEALS = res.data;
        // console.log(this.DEALS);
      })
  }

  go2Hotdeal(DEAL: iDeal) {
    this.navCtrl.navigateForward('/hotdeal');
    this.navPar.setter(DEAL);
  }

}
