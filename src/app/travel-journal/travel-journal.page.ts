import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { iPosition } from '../interface/position.interface';
import { GmapService } from '../gmap.service';
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
    private gmapService: GmapService
  ) { }

  ngOnInit() {
    this.startInitMap();
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
        this.loadPin();
      })
  }

  loadPin(){
    this.gmapService.addMarkerWithImageToMapWithIDReturnPromiseWithMarker(this.map, this.MAP_CENTER, '../assets/icon/favicon.png')
  }
}
