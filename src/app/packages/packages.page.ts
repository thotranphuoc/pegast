import { Component, OnInit } from '@angular/core';
import { PegastService } from '../services/pegast.service';
import { NavController } from '@ionic/angular';
import { NavParService } from '../services/nav-par.service';
import { AppService } from '../services/app.service';
import { LoadingService } from '../services/loading.service';
// import * as test from '../../test';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {
  myHTML;
  // test = test;
  DIRECTIONS = [];
  constructor(
    private navCtrl: NavController,
    private loadingService: LoadingService,
    private navService: NavParService,
    private pegastService: PegastService) { }

  ngOnInit() {
    this.searchPackages();
    // console.log(this.test);
    this.packageSearchOptionsGet();
  }

  searchPackages() {
    this.loadingService.startLoading();
    // let body = {"DepartureLocationId":448,"ReturnLocationId":448,"MainHotelIds":[],"MainHotelCategoryGroupIds":[],"MainHotelAttributeIds":[],"MainHotelMealGroupIds":[],"MainHotelCountryIds":[162],"OutgoingFlightClassId":null,"ReturnFlightClassId":null,"PackageIds":[],"StartDates":[{"Day":4,"Month":10,"Year":2018}],"DurationsInNights":[4],"PersonAges":[35,35],"InstantConfirmationOnly":false,"WithoutStopSales":true,"FlightsWithAvailableSeats":true,"FlightsWithSeatsOnRequest":true,"FlightsWithoutStops":false,"AirlineIds":[],"LanguageCode":"en","PaymentCurrencyId":2026920,"PackageSpoTypeIds":[],"BasicFares":null,"RenderAlternativeReturnLocations":true,"MainHotelRegionIds":[],"MainHotelLocationIds":[],"MainHotelLocationAreaIds":[]};
    // let body1 = {
    //   "DepartureLocationId": 448,
    //   "ReturnLocationId": 448,
    //   "MainHotelIds": [],
    //   "MainHotelCategoryGroupIds": [],
    //   "MainHotelAttributeIds": [],
    //   "MainHotelMealGroupIds": [],
    //   "MainHotelCountryIds": [162],
    //   "OutgoingFlightClassId": null,
    //   "ReturnFlightClassId": null,
    //   "PackageIds": [],
    //   "StartDates": [{ "Day": 4, "Month": 11, "Year": 2018 }],
    //   "DurationsInNights": [4],
    //   "PersonAges": [35, 35],
    //   "InstantConfirmationOnly": false,
    //   "WithoutStopSales": true,
    //   "FlightsWithAvailableSeats": true,
    //   "FlightsWithSeatsOnRequest": true,
    //   "FlightsWithoutStops": false,
    //   "AirlineIds": [],
    //   "LanguageCode": "en",
    //   "PaymentCurrencyId": 2026920,
    //   "PackageSpoTypeIds": [],
    //   "BasicFares": null,
    //   "RenderAlternativeReturnLocations": true,
    //   "MainHotelRegionIds": [],
    //   "MainHotelLocationIds": [],
    //   "MainHotelLocationAreaIds": []
    // }
    let body = {};
    let GROUP = 'Directions';
    this.pegastService.packagesSearchOptionsPost(GROUP)
      .subscribe((data: any) => {
        this.loadingService.hideLoading();
        console.log(data);
        this.DIRECTIONS = data.PackageSearchDirectionOption;
      },err=>{
        this.loadingService.hideLoading();
      })
    // this.pegastService.packagesSearch(body)
    //   // .subscribe((data) => {
    //   //   console.log(data);
    //   //   // this.myHTML = data;
    //   //   // document.getElementById('myHtml').innerHTML = this.myHTML;
    //   //   // this.getData();
    //   // })
  }

  go2PackageDirectionPage(DIR){
    this.navService.setter(DIR);
    this.navCtrl.navigateForward('/packages-of-direction');
  }

  


  getData() {
    let te = <Document>(this.myHTML).getElementsByClassName('flight-availability-wrapper');
    console.log(te);
  }

  packageSearchOptionsGet(){
    this.pegastService.packagesSearchOptionsGet(null)
    .subscribe(result=>{
      console.log(result);
    })
  }


}
