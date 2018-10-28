import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iHotel } from './interface/hotel.interface';

@Injectable({ providedIn: 'root' })
export class PegastService {
  constructor(private httpClient: HttpClient) { }

  getHotelSearchOptions(Groups: string, CountryIds: string[]) {
    let Hotels: iHotel = {
      Countries: [],
      Groups: [],
      HotelAttributes: [],
      HotelCategories: [],
      Hotels: [],
      Locations: [],
      MealGroups: [],
      Meals: [],
      Regions: []
    }


    let url = "http://pegast.vn/HotelSearch/GetOptions";
    let body = { Groups: Groups, CountryIds: CountryIds }
    return this.httpClient.post(url, body)
  }

  doSplit(STR: string) {
    let res = STR.split('|')
    console.log(res);
    this.doCovert(res);
  }

  doCovert(Arr: string[]) {
    let a = Arr.map(a => ({ Id: a.split('#')[0], Name: a.split('#')[1] }))
    console.log(a);
  }


  hotelSearch(Data) {
    let CountryIds = Data.CountryIds;
    let numOfAdult = Data.numOfAdult;
    let ChildAges = Data.ChildAges;
    let RegionIds = Data.RegionId? [Data.RegionId]: [];
    let LocationIds = Data.LocationId? [Data.LocationId]: [];
    let url = "http://pegast.vn/HotelSearch/Search";
    let body = {
      "CountryIds": CountryIds,
      "HotelAttributeIds": [],
      "HotelIds": [],
      "CheckInDate": { "Day": 22, "Month": 11, "Year": 2018 },
      "StayNights": 1,
      "InstantConfirmationOnly": null,
      "WithoutStopSales": null,
      "HotelCategoryIds": [],
      "MealIds": [],
      "RegionIds": RegionIds,
      "LocationIds": LocationIds,
      "LocationAreaIds": [],
      "Accommodations": [{ "Adults": numOfAdult, "ChildAges": [ChildAges] }]
    };
    console.log(body);
    return this.httpClient.post(url, body);
  }

  

  packagesSearch(body: any){
    let url = "http://pegast.vn/PackageCalculation/DisplaySearchResult"
    return this.httpClient.post(url, body,{ responseType:'text'});
  }
}
