import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { iPosition } from '../interface/position.interface';
import { GmapService } from '../services/gmap.service';
import { PegasService } from '../services/pegas.service';
import { NavController } from '@ionic/angular';
declare var google: any;
@Component({
  selector: 'app-local-map',
  templateUrl: './local-map.page.html',
  styleUrls: ['./local-map.page.scss'],
})
export class LocalMapPage implements OnInit {
  mapEl: any;
  map: any;
  RESTAURANTS: any[] =[];
  DRINKS: any[] = [];
  SHOPS: any[] = [];
  constructor(
    private loadingService: LoadingService,
    private gmapService: GmapService,
    private pegasService: PegasService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.startInitMap();
    this.getRestaurants();
    this.getShops();
    this.getDrinks();
  }


  startInitMap() {
    this.loadingService.startLoading();
    setTimeout(() => {
      this.mapEl = document.getElementById('map');
      this.initMap(this.mapEl)
    }, 1000)
  }

  initMap(mapElement){
    this.showMap({lng: 106.687988, lat: 10.778073}, mapElement );
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
      zoom: 14,
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
        this.loadPin();
      })
  }

  loadPin(){
    this.gmapService.addMarkerWithImageToMapWithIDReturnPromiseWithMarker(this.map, {lng: 106.687988, lat: 10.778073}, '../assets/icon/favicon.png')
  }

  getRestaurants(){
    this.pegasService.restaurantsGetWithPostMethod()
    .subscribe((res: any)=>{
      console.log(res);
      this.RESTAURANTS = res.data;
    })
  }
  getDrinks(){
    this.pegasService.drinksGetWithPostMethod()
    .subscribe((res: any)=>{
      console.log(res);
      this.DRINKS = res.data;
    })
  }
  getShops(){
    this.pegasService.shopsGetWithPostMethod()
    .subscribe((res: any)=>{
      console.log(res);
      this.SHOPS = res.data;
    })
  }

  go2Page(url){
    this.navCtrl.navigateForward(url);
  }
}
