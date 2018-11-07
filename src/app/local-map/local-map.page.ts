import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { iPosition } from '../interface/position.interface';
import { GmapService } from '../gmap.service';
declare var google: any;
@Component({
  selector: 'app-local-map',
  templateUrl: './local-map.page.html',
  styleUrls: ['./local-map.page.scss'],
})
export class LocalMapPage implements OnInit {
  mapEl: any;
  map: any;
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
    this.showMap({lat: 0, lng: 0}, mapElement );
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
      zoom: 10,
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
    this.gmapService.addMarkerWithImageToMapWithIDReturnPromiseWithMarker(this.map, {lat: 0.01, lng: 0.01}, 'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/35549982_2013449092318032_7297222192649994240_n.jpg?_nc_cat=103&_nc_ht=scontent.fsgn5-7.fna&oh=713ee3bfacd10e56490fc6e68e91f1a0&oe=5C440C0D')
  }
}
