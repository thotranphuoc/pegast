import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { iHotel } from '../interface/hotel.interface';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class PegastService {
  WSURL = 'https://cluboto.net/pegas/';
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
    let RegionIds = Data.RegionId ? [Data.RegionId] : [];
    let LocationIds = Data.LocationId ? [Data.LocationId] : [];
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



  // packagesSearch(body: any){
  //   let url = "http://pegast.vn/PackageCalculation/DisplaySearchResult"
  //   return this.httpClient.post(url, body,{ responseType:'text'});
  // }

  // change
  packagesSearch(body: any) {
    let url = "http://pegas-smart-app.enablecode.com.vn/pegas/Package_Search.php";
    // return this.httpClient.post(url, body, { responseType: 'text'});
    this.httpClient.get(url)
      .pipe(
        map((data: any) => {
          console.log(data);
          let REF = data.ReferenceDescription;
          console.log(REF);
          return data.Items.PackageSearchResultItem.map(ITEM => {
            // let PackageSearchResultFlightService = ITEM.FlightServices.PackageSearchResultFlightService;
            // PackageSearchResultFlightService.map()
            let PackageSearchResultHotelService = ITEM.HotelServices.PackageSearchResultHotelService;
            let PKG = PackageSearchResultHotelService.map(pkg => {
              _HotelId: REF.Hotels.Hotel.find(h => h.Id == pkg.HotelId);

            })
            return {
              ITEM: { ...ITEM },
              id: '1',
              _CurrencyId: REF.Currencies.Currency.find(cur => cur.Id == ITEM.CurrencyId),
              _PackageSearchResultHotelService: PackageSearchResultHotelService
            }
          })
        })
      )
      .subscribe((res) => {
        console.log(res);
      })
  }

  


  

  packagesSearchOptionsGet(GROUP) {
    // let url = 'http://pegas-smart-app.enablecode.com.vn/pegas/PackageSearchOptions.php&GROUP=' + GROUP;
    let url = this.WSURL + 'PackageSearchOptions.php';
    return this.httpClient.get(url)
  }

  packageDirectionsGet() {
    return this.packagesSearchOptionsPost('Directions')
      .pipe(
        map(result => { return result.PackageSearchDirectionOption })
      )
  }

  // PKG: First Request
  packagesSearchOptionsPost(GROUP) {
    let url = this.WSURL + 'PackageSearchOptions.php';
    let body = new HttpParams({
      fromObject: {
        GROUP: GROUP
      }
    });
    return this.httpClient.post(url, body).pipe(
      map((data: any) => {
        console.log(data);
        let REF = data.ReferenceDescription;
        let PackageSearchDirectionOption: any[] = data.SearchOptions.Directions.PackageSearchDirectionOption;
        PackageSearchDirectionOption.map(dir => {
          dir['_DepartureLocationId'] = REF.Locations.Location.find(item => item.Id == dir.DepartureLocationId),
          dir['_ReturnLocationId'] = REF.Locations.Location.find(item => item.Id == dir.ReturnLocationId),
          dir['_DestinationCountryId'] = REF.Countries.Country.find(item => item.Id == dir.DestinationCountryId)
        })
        return {
          PackageSearchDirectionOption: PackageSearchDirectionOption,
        }
      })
    )
  }

  // PKG: second request
  packagesSearchPost(DepartureLocationId, DestinationCountryId, ReturnLocationId, DateArray) {
    // let url = 'http://pegas-smart-app.enablecode.com.vn/pegas/PackageSearch.php';
    let url = this.WSURL + '/PackageSearch.php';
    let body = new HttpParams({
      fromObject: {
        // DepartureLocationId: DepartureLocationId,
        // DestinationCountryId: DestinationCountryId,
        // ReturnLocationId: ReturnLocationId,
        // DurationsInNights: '6,7,8,9,10',
        // MainHotelCountryIds: '72',
        // MaxResultItems: '100',
        // OutgoingFlightClassId: '94',
        // StartDates: DateArray[0] + 'T00:00:00Z;' + DateArray[1] + 'T00:00:00Z',
        // // StartDates: '2018-12-13T00:00:00Z;2018-12-14T00:00:00Z',
        // PersonAges: '35,36',
        // ReturnFlightClassId: '94',

        DepartureLocationId: DepartureLocationId,
        DestinationCountryId: DestinationCountryId,
        ReturnLocationId: DepartureLocationId,
        DurationsInNights: '6,7,8,9,10',
        MainHotelCountryIds: DestinationCountryId,
        // MaxResultItems: '10',
        // OutgoingFlightClassId: '94',
        StartDates: DateArray[0] + 'T00:00:00Z;' + DateArray[1] + 'T00:00:00Z',
        // StartDates: '2018-12-14T00:00:00Z;2018-12-15T00:00:00Z',
        // PersonAges: '35,36',
        // ReturnFlightClassId: '94',
      }
    });


    console.log(body, url, DateArray);
    return this.httpClient.post(url, body)
      .pipe(
        map((results: any) => {
          console.log(results);
          return {
            PKGS: results.Items.PackageSearchResultItem,
            REF: results.ReferenceDescription
          }
        }),
      )
    // .toPromise()
    // .then(res=>{
    //   console.log(res);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
  }

  // PKG: third request
  packagesSearchItemDetailPost(PaymentCurrencyId, SearchResultItemId) {
    let url = this.WSURL + 'PackageSearchItem.php';
    let body = new HttpParams({
      fromObject: {
        PaymentCurrencyId: PaymentCurrencyId,
        SearchResultItemId: SearchResultItemId
        // SearchResultItemId: "cNa/zK3Mv8zOw7/MCxgmzUzbv8yC3L/Mmd2/zPDev8xn1L/MS+G/zLfiv8zH+L/MAuW/zKxV3sxw57/Mp4gozb7pv8wX67/Mx4wozdvtv8y87r/M8++/zCjxv8x/6L/Mhum/zA==",

      }
    });
    console.log(url, body);
    return this.httpClient.post(url, body)
      .pipe(
        map((results: any) => {
          console.log(results);
          // return {
          //   PKGS: results.Items.PackageSearchResultItem,
          //   REF: results.ReferenceDescription
          // }
        }),
      )
    // .toPromise()
    // .then(res=>{
    //   console.log(res);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })

    // let URL = 'http://pegas-smart-app.enablecode.com.vn/pegas/PackageSearchItem.php?PaymentCurrencyId='+PaymentCurrencyId+'&SearchResultItemId='+SearchResultItemId;
    // console.log(URL);
    // return this.httpClient.get(URL)
    // // .subscribe(result=>{
    // //   console.log(result);
    // // })
  }

  packageBook(){
    let url = this.WSURL + '/PackageBooking.php';
    let body = new HttpParams({
      fromObject: {
        AdultMinAge : '0',
        AgencyCommission : '0',
        AgencyCommissionPercent : '0',
        AgencyDiscount : '0',
        AgencyDiscountPercent : '0',
        AgencyUserId : '26838991',
        BookingCurrencyId : '',
        DefaultPaymentCurrencyId : '',
        EndDate : '',
        MarketId: '',
        PackageId : '',
        Address : '',
        Cellphone : '',
        DateOfBirth : '',
        CitizenshipId : '',
        Email : '',
        ExpectedAge : '',
        FirstName: '',
        Guid : '',
        LastName: '',
        IsInfant : '',
        Phone: '',
        TravelDocumentExpirationDate : '',
        TravelDocumentIssueDate: '',
        TravelDocumentIssuer: '',
        TravelDocumentNotProvided:'',
        TravelDocumentNumber: '',
        TravelDocumentTypeId : '',
        Price: '',
        PriceValidityDateTime: '',
        OffsetMinutes: '',
        OutgoingClassId: '',
        OutgoingSegmentId: '',
        OutgoingServiceGuid: '',
        OutgoingStatus: '',
        PersonGuid: '',
        Seats: '',
        ReturnClassId: '',
        ReturnSegmentId: '',
        ReturnServiceGuid: '',
        ReturnStatus: '',
        StartDate:'',
        ToBePaid: '',
        VerificationCode: '',
      }
    });

    //console.log(body, url, DateArray);
    return this.httpClient.post(url, body)
      .pipe(
        map((results: any) => {
          console.log(results);
          return {
            //PKGS: results.Items.PackageSearchResultItem,
            //REF: results.ReferenceDescription
          
          }
        }),
      )
  }
}
