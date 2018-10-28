import { Component, OnInit } from '@angular/core';
import { iHotelSearch } from '../interface/pegas.interface';
import { LocalService } from '../local.service';
import { PegasService } from '../pegas.service';
import { NavController } from '@ionic/angular';
import { NavParService } from '../nav-par.service';

@Component({
  selector: 'app-hotels-search',
  templateUrl: './hotels-search.page.html',
  styleUrls: ['./hotels-search.page.scss'],
})
export class HotelsSearchPage implements OnInit {
  SEARCH: iHotelSearch = this.localService.HOTELSEARCH_DEFAULT;
  SEARCHTERM = {
    myCheckin: null,
    myCheckout: null,
    Adults: 0,
    Childs: 0
  };
  COUNTRIES = [];
  SELECTED_COUNTRY;
  numOfAdult = 0;
  ChildAges = 0;
  constructor(
    private navCtrl: NavController,
    private localService: LocalService,
    private pegasService: PegasService,
    private navParService: NavParService
  ) { }

  ngOnInit() {

    this.getHotelOptions();
  }

  getHotelOptions(){
    this.pegasService.hotelSearchOptions()
    .subscribe(data=>{
      console.log(data);
      this.COUNTRIES = data[0].HotelSearchOptionsResponse.Result.ReferenceDescription.Countries.Country;
      console.log(this.COUNTRIES);
    })
  }

  selectCountry(ctry){
    console.log(ctry);
    this.SELECTED_COUNTRY = ctry;
  }

  goSearchHotel(){
    this.getHotels();
    this.getPackages()
  }

  // getHotels() {
  //   this.pegasService.hotelSearch()
  //     // .subscribe(data => console.log(data));
  //   // this.pegasService.hotelSearchOptionsHotel()
  //     .subscribe(res => {
  //     console.log(res);
  //     this.convert(res);
  //   })
  // }

  getHotels() {
    this.pegasService.hotelSearch()
    .then((res: any)=>{
      console.log(res);
      this.SEARCH = res.SEARCH;
    })
    .catch((err)=> console.log(err))
  }

  getPackages(){
    this.pegasService.packagesSearch().then((res)=>{
      console.log(res);
    })
    .catch(err => console.log(err))
  }

  // startSearch() {
  //   this.SEARCH.RESULTS = [];
  //   console.log(this.SEARCHTERM);
  //   let t = this.SEARCHTERM.myCheckout - this.SEARCHTERM.myCheckin;
  //   console.log(t);
  //   // let URL = 'http://pegas-smart-app.enablecode.com.vn/webservice/soap_service.php?act=HotelSearch&Adults=2&CheckInDate=2018-10-10T00:00:00&CountryIds=73&HotelIds=13391&MaxResultItems=300&StayNights=5';
  //   let URL = 'http://pegas-smart-app.enablecode.com.vn/webservice/soap_service.php?act=AddHotelService&AdultMinAge=0&AgencyContractId=5724036&AgencyFeeAgencyBonus=0&AgencyFeeAgencyBonusPercent=0&AgencyFeeAgencyEmployeeBonus=0&AgencyFeeAgencyEmployeeBonusPercent=0&AgencyFeeCommission=0&AgencyFeeCommissionPercent=0.11&AgencyFeeDiscount=0&AgencyFeeDiscountPercent=0&AgencyFeeParentAgencyBonus=0&AgencyFeeParentAgencyBonusPercent=0&AgencyFeePercent=0.11&AgencyUserId=5566685&BookingCurrencyId=37&DefaultPaymentCurrencyId=37&EndDate=0001-01-01T00:00:00&MarketId=12487&PackageId=6045709&Address=Moscow'
  //   this.pegasService.getResponseFromUrl(URL)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.convert(data);
  //     })
  //   this.pegasService.getVoucher().subscribe(data => console.log(data));
  // }

  // convert(res) {
  //   let ref = res[0].HotelSearchResponse.Result.ReferenceDescription;
  //   let results = res[0].HotelSearchResponse.Result.SearchResultItems.HotelSearchResultItem;
  //   console.log(ref);
  //   this.SEARCH.REF.Country = ref.Countries.Country;
  //   this.SEARCH.REF.Currenty = ref.Currencies.Currency
  //   this.SEARCH.REF.Hotel = ref.Hotels.Hotel;
  //   this.SEARCH.REF.HotelAttribute = ref.HotelAttributes.HotelAttribute;
  //   this.SEARCH.REF.HotelCategory = ref.HotelCategories.HotelCategory;
  //   this.SEARCH.REF.Location = ref.Locations.Location;
  //   this.SEARCH.REF.Meal = ref.Meals.Meal;
  //   this.SEARCH.REF.MealGroup = ref.MealGroups.MealGroup;
  //   this.SEARCH.REF.Region = ref.Regions.Region;
  //   this.SEARCH.REF.RoomCategory = ref.RoomCategories.RoomCategory;
  //   this.SEARCH.RESULTS = results;
  //   this.SEARCH.RESULTS.forEach(RESULT => {
  //     RESULT['Hotel'] = this.SEARCH.REF.Hotel.Name;
  //     RESULT['Meal'] = this.SEARCH.REF.Meal.filter(ITEM => ITEM.Id === RESULT.MealId)[0];
  //     RESULT['PaymentCurrency'] = this.SEARCH.REF.Currenty.filter(ITEM => ITEM.Id === RESULT.PaymentCurrencyId)[0];
  //     RESULT['PriceCurrency'] = this.SEARCH.REF.Currenty.filter(ITEM => ITEM.Id === RESULT.PriceCurrencyId)[0];
  //     RESULT['Room'] = this.SEARCH.REF.RoomCategory.filter(ITEM => ITEM.Id === RESULT.RoomCategoryId)[0];
  //   })
  //   console.log(this.SEARCH);
  // }

  bookRoom(RESULT){
    console.log(RESULT);
    this.navCtrl.navigateForward('home');
    // send request booking here
    this.navParService.setter(RESULT);
  }

}
