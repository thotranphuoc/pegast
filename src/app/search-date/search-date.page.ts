import { Component, OnInit } from '@angular/core';
import { PegasService } from '../services/pegas.service';
import { NavController, ModalController } from '@ionic/angular';
import { NavParService } from '../services/nav-par.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-search-date',
  templateUrl: './search-date.page.html',
  styleUrls: ['./search-date.page.scss'],
})
export class SearchDatePage implements OnInit {
  checkinDate = '01/01/2000';
  checkoutDate = '01/01/2000';
  date1 = '2018-01-01';
  date2 = '2018-01-01';
  DEALS = [];
  FINAL_DEALS = [];
  minYear;
  maxYear;
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navPar: NavParService,
    private appService: AppService,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.getYears();
  }

  getYears() {
    let date = new Date();
    let YEAR = date.getFullYear();
    console.log(YEAR);
    this.minYear = YEAR;
    this.maxYear = this.minYear + 2;
  }

  // changeDate1(ev){
  //   console.log(ev);
  //   let date = ev.detail.value;
  //   console.log(date);
  //   this.date1 = date;
  //   this.checkinDate = date.toString().substr(8,2)+'/'+date.toString().substr(5,2)+'/'+date.toString().substr(0,4)
  // }

  // changeDate2(ev){
  //   console.log(ev);
  //   let date = ev.detail.value;
  //   console.log(date);
  //   this.date2 = date;
  //   this.checkoutDate = date.toString().substr(8,2)+'/'+date.toString().substr(5,2)+'/'+date.toString().substr(0,4)
  // }

  shortDate(date: string) {
    return date.substr(0, 5);
  }

  getDeals() {
    this.pegasService.dealsGet().toPromise()
      .then((res: any) => {
        console.log(res);
        this.DEALS = res.data;
        this.checkDealsAvailable(this.DEALS);
      })
      .catch(err => {
        console.log(err);
      })
  }

  checkDealsAvailable(DEALS: any[]) {
    this.FINAL_DEALS = [];
    DEALS.forEach(DEAL => {
      DEAL['available'] = this.checkIfAvailable(DEAL);
      if (this.checkIfAvailable(DEAL)) {
        this.FINAL_DEALS.push(DEAL);
      }
    })
    console.log(DEALS);
    if (this.FINAL_DEALS.length < 1) {
      this.appService.presentToast('Sorry, there is no result matched.', 5000);
    }
  }
  checkIfAvailable(DEAL: any) {
    console.log(this.checkinDate, this.checkoutDate);
    console.log('checkinDate false');
    if (this.date1 > DEAL.tour_startdate || this.date1 > DEAL.flight_startdate || this.date1 > DEAL.hotel_startdate) return false;
    console.log('checkoutDate false');
    if (this.date2 < DEAL.tour_returndate || this.date2 < DEAL.flight_returndate || this.date2 < DEAL.hotel_returndate) return false;
    console.log('true');
    return true;
  }

  go2HotdealDeail(DEAL) {
    this.navCtrl.navigateForward('/deal/' + DEAL.id);
    this.navPar.setter(DEAL);
  }

  
}
