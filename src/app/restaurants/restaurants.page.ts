import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PegasService } from '../services/pegas.service';
import { NavParService } from '../services/nav-par.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  RESTAURANTS = [];
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navParService: NavParService
  ) { }
  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants() {
    this.pegasService.restaurantsGetWithPostMethod()
      .subscribe((res: any) => {
        console.log(res);
        this.RESTAURANTS = res.data;
      })
  }

  go2Restaurant(RESTAURANT) {
    this.navCtrl.navigateForward('/restaurant')
    this.navParService.setter(RESTAURANT);
  }

}
