import { Component, OnInit } from '@angular/core';
import { NavParService } from '../services/nav-par.service';
import { PegastService } from '../services/pegast.service';

@Component({
  selector: 'app-packages-of-direction',
  templateUrl: './packages-of-direction.page.html',
  styleUrls: ['./packages-of-direction.page.scss'],
})
export class PackagesOfDirectionPage implements OnInit {
  DIR: any;
  PKGS: any[] =[];
  REF:  any;
  HOTELS: any[] = [];
  constructor(
    private navService: NavParService,
    private pegastService: PegastService
  ) { 
    this.DIR = this.navService.getter();
    console.log(this.DIR);
  }

  ngOnInit() {
    this.packagesSearchPost(this.DIR)
  }

  packagesSearchPost(DIR){
    console.log(DIR);
    let DateArray = ['2018-12-07T00:00:00Z','2018-12-08T00:00:00Z'];
    this.pegastService.packagesSearchPost(DIR.DepartureLocationId, DIR.DestinationCountryId, DIR.ReturnLocationId, DateArray)
    .subscribe((res: any)=>{
      console.log(res);
      this.PKGS = res.PKGS;
      this.REF = res.REF;
      this.PKGS.forEach(PKG => {
        PKG['_PackageId'] = this.REF.Packages.Package.find(p=> p.Id == PKG.PackageId);
        PKG['_CurrencyId'] = this.REF.Currencies.Currency.find(p=> p.Id == PKG.CurrencyId);
        PKG['_HOTELS'] = this.convertPKG(PKG);
      });
    })
  }

  convertPKG(PKG){
    // console.log(PKG);
    let HOTELS = PKG.HotelServices.PackageSearchResultHotelService;
    HOTELS.forEach(HOTEL =>{
      HOTEL['_HotelId'] = this.REF.Hotels.Hotel.find(item=> item.Id ==HOTEL.HotelId);
      HOTEL['_RoomCategoryId'] = this.REF.RoomCategories.RoomCategory.find(item=> item.Id ==HOTEL.RoomCategoryId)
    })
    // console.log(HOTELS);
    return HOTELS;
  }

  selectPackage(PKG){
    console.log(PKG)
  }

}
