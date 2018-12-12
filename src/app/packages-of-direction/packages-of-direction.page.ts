import { Component, OnInit } from '@angular/core';
import { NavParService } from '../services/nav-par.service';
import { PegastService } from '../services/pegast.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-packages-of-direction',
  templateUrl: './packages-of-direction.page.html',
  styleUrls: ['./packages-of-direction.page.scss'],
})
export class PackagesOfDirectionPage implements OnInit {
  DIR: any;
  PKGS: any[] = [];
  REF: any;
  HOTELS: any[] = [];
  constructor(
    private navCtrl: NavController,
    private navService: NavParService,
    private loadingService: LoadingService,
    private appService: AppService,
    private pegastService: PegastService
  ) {
    this.DIR = this.navService.getter();
    console.log(this.DIR);
    if (typeof (this.DIR) == 'undefined') {
      this.navCtrl.navigateRoot('/home');
    }
  }

  ngOnInit() {
    // this.packagesSearchPost(this.DIR)
  }

  packagesSearchPost(DIR, FROM, TO) {
    this.loadingService.startLoading();
    console.log(DIR, FROM, TO);
    let DateArray = [FROM, TO];
    this.pegastService.packagesSearchPost(DIR.DepartureLocationId, DIR.DestinationCountryId, DIR.ReturnLocationId, DateArray)
      .subscribe((res: any) => {
        this.loadingService.hideLoading();
        console.log(res);
        this.PKGS = res.PKGS;
        this.REF = res.REF;
        this.PKGS.forEach(PKG => {
          PKG['_PackageId'] = this.REF.Packages.Package.find(p => p.Id == PKG.PackageId);
          PKG['_CurrencyId'] = this.REF.Currencies.Currency.find(p => p.Id == PKG.CurrencyId);
          PKG['_HOTELS'] = this.convertPKG(PKG);
        });
      }, err => {
        this.loadingService.hideLoading();
      })
  }

  convertPKG(PKG) {
    // console.log(PKG);
    let HOTELS = PKG.HotelServices.PackageSearchResultHotelService;
    HOTELS.forEach(HOTEL => {
      HOTEL['_HotelId'] = this.REF.Hotels.Hotel.find(item => item.Id == HOTEL.HotelId);
      HOTEL['_RoomCategoryId'] = this.REF.RoomCategories.RoomCategory.find(item => item.Id == HOTEL.RoomCategoryId)
    })
    // console.log(HOTELS);
    return HOTELS;
  }

  selectPackage(PKG) {
    console.log(PKG)
    this.getPackageItemDetail(PKG.CurrencyId,PKG.Id);
  }

  getPackageItemDetail(PaymentCurrencyId, SearchResultItemId) {
    this.pegastService.packagesSearchItemDetailPost(PaymentCurrencyId, SearchResultItemId)
    .subscribe((result)=>{
      console.log(result);
    })
  }

  showAlert() {
    this.appService.presentAlert(null, 'Opps', 'This function is under development', 'OK');
  }

  search(from, to) {
    let FROM = '';
    let TO = '';
    console.log(from, to, this.DIR);
    if (from) {
      FROM = from.toString() + 'T00:00:00Z';
    }
    if (to) {
      TO = to.toString() + 'T00:00:00Z';
    }
    if (typeof (this.DIR) == 'undefined') return;
    this.packagesSearchPost(this.DIR, FROM, TO)
  }

}
