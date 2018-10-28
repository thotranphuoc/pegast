import { Component, OnInit } from '@angular/core';
import { PegastService } from '../pegast.service';
// import * as test from '../../test';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage implements OnInit {
  myHTML;
  // test = test;
  constructor(private pegastService: PegastService) { }

  ngOnInit() {
    this.searchPackages();
    // console.log(this.test);
  }

  searchPackages() {
    let body = {"DepartureLocationId":448,"ReturnLocationId":448,"MainHotelIds":[],"MainHotelCategoryGroupIds":[],"MainHotelAttributeIds":[],"MainHotelMealGroupIds":[],"MainHotelCountryIds":[162],"OutgoingFlightClassId":null,"ReturnFlightClassId":null,"PackageIds":[],"StartDates":[{"Day":4,"Month":10,"Year":2018}],"DurationsInNights":[4],"PersonAges":[35,35],"InstantConfirmationOnly":false,"WithoutStopSales":true,"FlightsWithAvailableSeats":true,"FlightsWithSeatsOnRequest":true,"FlightsWithoutStops":false,"AirlineIds":[],"LanguageCode":"en","PaymentCurrencyId":2026920,"PackageSpoTypeIds":[],"BasicFares":null,"RenderAlternativeReturnLocations":true,"MainHotelRegionIds":[],"MainHotelLocationIds":[],"MainHotelLocationAreaIds":[]};
    let body1 = {
      "DepartureLocationId": 448,
      "ReturnLocationId": 448,
      "MainHotelIds": [],
      "MainHotelCategoryGroupIds": [],
      "MainHotelAttributeIds": [],
      "MainHotelMealGroupIds": [],
      "MainHotelCountryIds": [162],
      "OutgoingFlightClassId": null,
      "ReturnFlightClassId": null,
      "PackageIds": [],
      "StartDates": [{ "Day": 4, "Month": 11, "Year": 2018 }],
      "DurationsInNights": [4],
      "PersonAges": [35, 35],
      "InstantConfirmationOnly": false,
      "WithoutStopSales": true,
      "FlightsWithAvailableSeats": true,
      "FlightsWithSeatsOnRequest": true,
      "FlightsWithoutStops": false,
      "AirlineIds": [],
      "LanguageCode": "en",
      "PaymentCurrencyId": 2026920,
      "PackageSpoTypeIds": [],
      "BasicFares": null,
      "RenderAlternativeReturnLocations": true,
      "MainHotelRegionIds": [],
      "MainHotelLocationIds": [],
      "MainHotelLocationAreaIds": []
    }
    this.pegastService.packagesSearch(body)
      .subscribe((data) => {
        console.log(data);
        this.myHTML = data;
        document.getElementById('myHtml').innerHTML = this.myHTML;
        this.getData();
      })
  }


  getData(){
    let te = <Document>(this.myHTML).getElementsByClassName('flight-availability-wrapper');
    console.log(te);
  }


}
