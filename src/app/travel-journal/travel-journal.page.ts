import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { iPosition } from '../interface/position.interface';
import { GmapService } from '../gmap.service';
import { PegasService } from '../pegas.service';
import { LocalService } from '../local.service';
import { AppService } from '../app.service';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { iProfile } from '../interface/profile.interface';
declare var google: any;

@Component({
  selector: 'app-travel-journal',
  templateUrl: './travel-journal.page.html',
  styleUrls: ['./travel-journal.page.scss'],
})
export class TravelJournalPage implements OnInit {
  mapEl: any;
  map: any;
  MAP_CENTER: iPosition = { lat: 10.7735686, lng: 106.7733993}
  constructor(
    private loadingService: LoadingService,
    private gmapService: GmapService,
    private pegasService: PegasService,
    private localService: LocalService,
    private appService: AppService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.startInitMap();
    console.log('ngOnInit')
  }


  

  startInitMap() {
    this.loadingService.startLoading();
    setTimeout(() => {
      this.mapEl = document.getElementById('map');
      this.initMap(this.mapEl)
    }, 1000)
  }

  initMap(mapElement){
    this.showMap(this.MAP_CENTER, mapElement );
  }
  // initMap(mapElement) {
  //   if (this.USER_LOCATION) {
  //     this.showMap(this.USER_LOCATION, mapElement);
  //   } else {
  //     this.gmapService.getCurrentLocation().then((position: iPosition) => {
  //       console.log(position);
  //       this.USER_LOCATION = position;
  //       this.showMap(this.USER_LOCATION, mapElement);
  //     })
  //   }
  // }

  showMap(position: iPosition, mapElement) {
    let latLng = new google.maps.LatLng(position.lat, position.lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      fullscreenControl: false
    }

    console.log(mapElement, mapOptions);
    this.gmapService.initMap(mapElement, mapOptions)
      .then((map) => {
        console.log(map);
        this.map = map;
        // // when maps is loaded and become idle
        // this.gmapService.addBlueDotToMap(this.map, mapOptions.center);
        // google.maps.event.addListener(this.map, 'idle', () => {
        //   console.log('map was loaded fully');
        //   this.loadingService.hideLoading();
        //   this.loadShops();
        // })


        // if(this.localService.ACCOUNT.isSigned){
        //   this.getUserTravelJournals(this.localService.ACCOUNT.id)
        // }else{
        //   this.presentAlertConfirm();
        //   // this.appService.presentAlertPrompt2Login();
          
        // }
        
        this.getUserTravelJournals();
      })
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Please login to view',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm OK');
            this.navCtrl.navigateForward('/login',true);
          }
        }
      ]
    });

    await alert.present();
  }

  loadPin(POSTITION: iPosition){
    this.gmapService.addMarkerWithImageToMapWithIDReturnPromiseWithMarker(this.map, POSTITION, '../assets/icon/favicon.png')
  }

  getUserTravelJournals(){
    let UID = this.authService.getCurrentUser().uid;
    this.pegasService.profileGet_FB(UID)
    .then((res)=>{
      let PROFILE = <iProfile>res.data();
      return this.pegasService.travelJournalsUserGet(PROFILE.OTHER.ID).toPromise()
    })
    // this.pegasService.travelJournalsUserGet(USER_ID)
    .then((res: any)=>{
      this.loadingService.hideLoading();
      console.log(res);
      if(res.data.length<1){
        this.appService.presentAlert('Alert','Opps', 'There is no any records', 'OK')
      }else{
        let CITIES: any[] = res.data;
        CITIES.forEach(CITY=>{
          this.loadPin({lat: CITY.city_lat, lng: CITY.city_lng})
        })
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
