import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';
import { iDeal } from '../interface/pegas.interface';
import { NavController } from '@ionic/angular';
import { NavParService } from '../nav-par.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  DEALS: iDeal[] = [];
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navPar: NavParService) { }

  ngOnInit() {
    // this.getHotdeals();
    // this.getNewsSpecials();
    this.getNews();
  }

  // getNewsSpecials() {
  //   this.pegasService.newsSpecialsGetWithPostMethod()
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       this.NEWSSPECIALS = [];
  //       this.NEWSSPECIALS = res.data;
  //       console.log(this.NEWSSPECIALS);
  //     })
  // }

  getNews(){
    this.pegasService.dealsGet().toPromise()
    .then((res: any)=>{
      console.log(res);
        this.DEALS = [];
        this.DEALS = res.data;
        console.log(this.DEALS);
    })
  }

  go2HotdealDeail(DEAL) {
    this.navCtrl.navigateForward('/deal/'+DEAL.id);
    this.navPar.setter(DEAL);
  }

  go2NewsSpecialDetail(DEALS){
    console.log(DEALS);
    this.navPar.setter(DEALS);
    this.navCtrl.navigateForward('news-special-detail');
  }

  // getHotdeals() {
  //   this.pegasService.getHotdeal()
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       this.DEALS = res.data;
  //       console.log(this.DEALS);
  //     })
  //   this.pegasService.dealsGetWithPostMethod()
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       // this.DEALS = res.data;
  //       // console.log(this.DEALS);
  //     })
  // }

  go2Hotdeal(DEAL: iDeal) {
    this.navCtrl.navigateForward('/hotdeal');
    this.navPar.setter(DEAL);
  }

}
