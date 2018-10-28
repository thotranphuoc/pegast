import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PegasService } from '../pegas.service';
import { NavParService } from '../nav-par.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  LOCATIONS = [];
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
      })
  }

  go2Location(LOC) {
    this.navCtrl.navigateForward('/location')
    this.navParService.setter(LOC
    );
  }

}
