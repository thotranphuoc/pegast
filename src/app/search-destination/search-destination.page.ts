import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';
import { NavParService } from '../nav-par.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-search-destination',
  templateUrl: './search-destination.page.html',
  styleUrls: ['./search-destination.page.scss'],
})
export class SearchDestinationPage implements OnInit {
  ROUTES = [
    { From: 'F1', To: 'T1' },
    { From: 'F2', To: 'T2' },
    { From: 'F3', To: 'T3' },
    { From: 'F1', To: 'T3' },
    { From: 'F2', To: 'T3' }
  ]
  uniqFroms: any[] = [];
  uniqRoutesFrom: any[] = [];
  uniqRoutesDest = [];
  DEALS = [];
  DEALFROMs = [];
  FINAL_DEALS = [];
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navPar: NavParService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {

    this.getDeals();

  }

  getDeals() {
    this.loadingService.startLoading();
    this.pegasService.dealsGet().toPromise()
      .then((res: any) => {
        console.log(res)
        this.DEALS = res.data;
        // this.unifyFrom();
        return this.getFromUniq(this.DEALS);
      })
      .then((res) => {
        this.loadingService.hideLoading();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  selectFrom(Route: any) {
    console.log(Route);
    this.uniqRoutesDest = this.DEALS.filter((D) => D.city_code_from == Route.city_code_from);
    console.log(this.uniqRoutesDest);
    this.FINAL_DEALS = this.uniqRoutesDest;
  }

  selectTo(Route: string) {
    console.log(Route);
    this.FINAL_DEALS = [];
    this.FINAL_DEALS.push(Route);
    // this.uniqRoutesDest = this.ROUTES.filter((R) => R.From == Route);
  }

  getFromUniq(DEALS: any[]) {
    return new Promise((resolve, reject) => {
      let temp = DEALS.map(DEAL => DEAL.city_code_from)
      let uniq = this.removeDuplicate(temp);
      console.log(uniq);
      this.DEALFROMs = [];
      uniq.forEach(u => {
        let deal = DEALS.filter(deal => deal.city_code_from == u)[0];
        this.DEALFROMs.push(deal);
      })
      console.log(this.DEALFROMs);
      setTimeout(() => {
        resolve()
      }, 1000);
    })
  }

  unifyFrom() {
    let newR = this.ROUTES.map(Route => Route.From);
    console.log(newR);
    this.uniqFroms = this.removeDuplicate(newR);
    console.log(this.uniqFroms);
    // this.uniqFroms.forEach(from=>{
    //   let index = this.ROUTES.ind
    // })
  }

  removeDuplicate(arr1: any[]): any[] {
    let array = [];
    array.push(arr1[0]);
    arr1.forEach(item => {
      let index = array.indexOf(item);
      if (index < 0) {
        array.push(item);
      }
    })
    return array;
  }

  go2HotdealDeail(DEAL) {
    this.navCtrl.navigateForward('/deal/' + DEAL.id);
    this.navPar.setter(DEAL);
  }
}
