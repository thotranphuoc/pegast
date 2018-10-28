import { Component, OnInit } from '@angular/core';
import { PegastService } from '../pegast.service';
import { iHotelCountry, iHotel } from '../interface/hotel.interface';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {
  HOTEL_REFS: iHotel;;
  HOTELS: any[];
  countries: iHotelCountry[] = [
    { ISO: "TH", TimeZone: '7', OptionalLanguageNames: [], Id: '164', Name: "Thái Lan", Groups: '66' },
    { ISO: "VN", TimeZone: '7', OptionalLanguageNames: [], Id: '156', Name: "Việt Nam", Groups: '64' }
  ];
  SELECTED_COUNTRY: iHotelCountry = this.countries[0];
  ISO: string;
  Location;
  ChildAges: number = 0;
  numOfAdult: number = 0;
  OPTIONS;
  LOC: any;
  LOCATIONS = [];
  items: Array<{ value: number, text: string, checked: boolean }> = [];
  // item: { value: number, text: string, checked: boolean } = { value: 0, text: '', checked: false};
  itemkey;
  Countries = [
    { name: 'Vietnam', id: "VN"},
    { name: 'Thailand', id: 'TH'}
  ]
  selectedCountries;
  constructor(
    private pegastService: PegastService) {
    this.items.push({ value: 1, text: 'Super Distributor', checked: false });
    this.items.push({ value: 2, text: 'Distributor', checked: false });
    this.items.push({ value: 3, text: 'Retailer', checked: false });
    this.items.push({ value: 4, text: 'End User', checked: false });
    console.log(this.items)
  }

  ngOnInit() {
    // this.pegastService.getHotelSearchOptions();
    this.getHotelSearchOptions();
  }

  getHotelSearchOptions() {
    this.HOTELS = [];
    this.LOCATIONS = [];
    let Groups = this.SELECTED_COUNTRY.Groups;
    let CountryId = this.SELECTED_COUNTRY.Id
    this.pegastService.getHotelSearchOptions(Groups, [CountryId])
      .subscribe(data => {
        this.OPTIONS = data;
        this.LOCATIONS = this.OPTIONS.Locations;
        console.log(this.OPTIONS);
      })
  }

  selectCountry() {
    console.log('select');
    this.SELECTED_COUNTRY = this.countries.filter(ct => ct.ISO == this.ISO)[0];
    console.log(this.SELECTED_COUNTRY);
    this.getHotelSearchOptions();
  }

  selectLocation1(loc) {
    console.log(loc.value);
  }
  selectLocation(){
    console.log(this.LOC, this.LOC.Name);
  }

  selectLocation2(){
    console.log(this.LOC);
  }

  doSplit(STR: string) {
    let res = STR.split('|')
    console.log(res);
    return this.doCovert(res);
  }

  doCovert(Arr: string[]) {
    let a = Arr.map(a => ({ Id: a.split('#')[0], Name: a.split('#')[1] }))
    // console.log(a);
    return a;
  }

  searchHotels() {
    let CountryId = this.SELECTED_COUNTRY.Id;
    let Data = {
      CountryIds: [CountryId],
      numOfAdult: this.numOfAdult,
      ChildAges: this.ChildAges,
      // RegionId: '',
      // LocationId: ''
    }
    this.doSearchHotels(Data);
  }

  doSearchHotels(Data) {
    // let CountryIds = Data.CountryIds;

    let REF;
    let HOTELS: any[] = [];
    console.log('searchHotels');
    this.pegastService.hotelSearch(Data)
      .subscribe((data: any) => {
        console.log(data);
        REF = data;
        HOTELS = data.SearchResultItems;
        HOTELS.forEach(HOTEL => {
          HOTEL['Hotel'] = REF.Hotels.filter(Hotel => Hotel.Id === HOTEL.HotelId)[0];
          HOTEL.Hotel['Category'] = REF.HotelCategories.filter(Cat => Cat.Id === HOTEL.Hotel.CategoryId)[0];
          HOTEL.Hotel['Location'] = REF.Locations.filter(item => item.Id === HOTEL.Hotel.LocationId)[0];
          HOTEL['Combinations'].forEach(Com => {
            Com['Meal'] = REF.Meals.filter(item => item.Id === Com.MealId)[0];
            Com['RoomCategory'] = REF.RoomCategories.filter(item => item.Id === Com.RoomCategoryId)[0];
          })
        })
        // console.log(HOTELS);
        this.HOTELS = HOTELS;
      })
  }


  selectItem(){
    console.log(this.itemkey);
    let selectedItem = this.items.filter(item=> item.value = this.itemkey)[0];
    console.log(selectedItem);
  }

  selectItem1(e){
    console.log(e);
  }

  selectItem2(e){
    console.log(e.value);
  }

  equals(o1,o2){
    return o1.id == o2.id;
  }

  selectCty(){
    console.log(this.selectedCountries);
  }
}