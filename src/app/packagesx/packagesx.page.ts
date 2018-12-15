import { Component, OnInit } from '@angular/core';
import { PegastService } from '../services/pegast.service';
import { AppService } from '../services/app.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-packagesx',
  templateUrl: './packagesx.page.html',
  styleUrls: ['./packagesx.page.scss'],
})
export class PackagesxPage implements OnInit {
  Directions: any[] = [];
  FROMs = [];
  MEALS = [];
  PACKAGES = [];
  HOTELS = [];
  DEPFLIGHTS = [];
  ARRFLIGHTS = [];
  ADULTS = [];
  CHILDREN = [];
  ROOMCATEGORIES = [];
  HOTELSTARS = [];
  TOs: any[] = [];
  returnDate;
  departureDate;
  REF: any;
  PKGS: any[] =[];
  SelectedDirection;
  Packages = [];
  Package;
  minYear;
  maxYear;
  constructor(
    private pegastService: PegastService,
    private appService: AppService,
    private loadingService: LoadingService,
  ) { }

  ngOnInit() {
    this.getLocations();
    this.getYears();
  }

  getYears(){
    let date = new Date();
    let YEAR = date.getFullYear();
    console.log(YEAR);
    this.minYear = YEAR;
    this.maxYear = this.minYear + 2;
  }

  getLocations() {
    this.pegastService.packageDirectionsGet()
      .toPromise()
      .then((res) => {
        this.Directions = res;
        console.log(this.Directions);
        this.FROMs = this.appService.uniqArrayWithKey(this.Directions, 'DepartureLocationId');
        console.log(this.FROMs);
        this.TOs = this.appService.uniqArrayWithKey(this.Directions, 'DestinationCountryId');
        console.log(this.TOs);
      })
  }

  selectFrom(v) {
    console.log(v);
    this.TOs = this.appService.uniqArrayWithKey(this.Directions.filter(dir => dir.DepartureLocationId == v.DepartureLocationId), 'DestinationCountryId');
  }

  selectTo(v) {
    console.log(v);
    this.SelectedDirection = v;
  }

  search() {
    console.log(this.returnDate, this.departureDate);
    this.getPackagesFromDirection(this.SelectedDirection, this.departureDate, this.returnDate );
  }

  selectPkg(pkg){
    console.log(pkg);
  }

  selectMeal(meal){
    console.log(meal);
  }

  selectHotel(H){
    console.log(H);
  }

  selectDepFlight(D){
    console.log(D);
  }

  selectArrFlight(D){
    console.log(D);
  }

  selectHotelStar(D){
    console.log(D);
  }

  selectRoomCategory(D){
    console.log(D);
  }


  getPackagesFromDirection(DIR, FROM, TO) {
    this.loadingService.startLoading();
    console.log(DIR, FROM, TO);
    let DateArray = [FROM, TO];
    this.pegastService.packagesSearchPost(DIR.DepartureLocationId, DIR.DestinationCountryId, DIR.ReturnLocationId, DateArray)
      .subscribe((res: any) => {
        this.loadingService.hideLoading();
        console.log(res);
        this.PKGS = res.PKGS;
        this.REF = res.REF;
        if(this.PKGS.length>0){
          this.PKGS.forEach(PKG => {
            PKG['_PackageId'] = this.REF.Packages.Package.find(p => p.Id == PKG.PackageId);
            PKG['_CurrencyId'] = this.REF.Currencies.Currency.find(p => p.Id == PKG.CurrencyId);
            PKG['_HOTELS'] = this.convertPKG(PKG);
            PKG['_MEAL'] = this.REF.Meals.Meal.find(p => p.Id == PKG.HotelServices.PackageSearchResultHotelService[0].MealId)
          });
          console.log(this.PKGS);
          this.HOTELS = this.appService.uniqArrayWithKey(this.PKGS.map(PKG => PKG._HOTELS[0]._HotelId),'Id');
          this.MEALS = this.appService.uniqArrayWithKey(this.PKGS.map(PKG => PKG._MEAL),'Id');
          this.PACKAGES = this.appService.uniqArrayWithKey(this.PKGS.map(PKG => PKG._PackageId),'Id');
          this.ADULTS = this.appService.uniqArrayWithKey(this.PKGS.map(PKG => PKG._HOTELS[0]),'Adults');
          this.CHILDREN = this.appService.uniqArrayWithKey(this.PKGS.map(PKG => PKG._HOTELS[0]),'Children');
          this.HOTELSTARS = this.appService.uniqArrayWithKey(this.PKGS.map(PKG=> PKG._HOTELS[0]._HotelStar),'Name');
          this.ROOMCATEGORIES = this.appService.uniqArrayWithKey(this.PKGS.map(PKG=> PKG._HOTELS[0]._RoomCategoryId),'Name');
          this.DEPFLIGHTS = this.appService.uniqArrayWithKey(this.PKGS.map(PKG=>PKG.FlightServices.PackageSearchResultFlightService[0]),'ClassId');
          this.ARRFLIGHTS = this.appService.uniqArrayWithKey(this.PKGS.map(PKG=>PKG.FlightServices.PackageSearchResultFlightService[1]),'ClassId');
  
          console.log(this.MEALS);
        }else{
          this.appService.presentAlert('Oops',null,'There is no result','OK')
        }
      }, err => {
        this.loadingService.hideLoading();
      })
  }



  checkIfAvailable(Direction, from, to) {
    let FROM = '';
    let TO = '';
    console.log(from, to, Direction);
    if (from) {
      FROM = from.toString() + 'T00:00:00Z';
    }
    if (to) {
      TO = to.toString() + 'T00:00:00Z';
    }
    if (typeof (Direction) == 'undefined') return;
    this.getPackagesFromDirection(Direction, FROM, TO)
  }

  convertPKG(PKG) {
    // console.log(PKG);
    let HOTELS = PKG.HotelServices.PackageSearchResultHotelService;
    HOTELS.forEach(HOTEL => {
      HOTEL['_HotelId'] = this.REF.Hotels.Hotel.find(item => item.Id == HOTEL.HotelId);
      HOTEL['_HotelStar'] = this.REF.HotelCategories.HotelCategory.find(item => item.Id == HOTEL._HotelId.CategoryId);
      HOTEL['_RoomCategoryId'] = this.REF.RoomCategories.RoomCategory.find(item => item.Id == HOTEL.RoomCategoryId);
      // HOTEL['_HotelStar'] = 
    })
    // console.log(HOTELS);
    return HOTELS;
  }

}
