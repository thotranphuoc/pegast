import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PegasService } from '../services/pegas.service';
import { NavParService } from '../services/nav-par.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  LOCATIONS = [];
  LOCATIONS_ = [];
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navParService: NavParService
  ) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.pegasService.locationsGetWithPostMethod()
      .subscribe((res: any) => {
        console.log(res);
        this.LOCATIONS = res.data;
        this.LOCATIONS_ = res.data;
      })
  }

  go2Location(LOC) {
    this.navCtrl.navigateForward('/location/'+LOC.id)
    // this.navParService.setter(LOC);
  }

  search(e){
    let str = e.detail.value.toLowerCase();
    console.log(str);
    if(str.length>0){
      this.LOCATIONS = this.LOCATIONS.filter(LOC => LOC.title_vn.toLowerCase().indexOf(str)>-1)
    }else{
      console.log('str = 0');
      this.LOCATIONS = this.LOCATIONS_; 
    }
  }

}
