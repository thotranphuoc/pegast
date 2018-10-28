import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PegasService } from '../pegas.service';
import { NavParService } from '../nav-par.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  data;
  RESTAURANT;
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navParService: NavParService
  ) {
    this.data = this.navParService.getter();
    console.log(this.data);
  }
  ngOnInit() {
    // this.getHotdeals();
    this.getRestaurantDetail();
  }

  getRestaurantDetail() {
    this.pegasService.restaurantDetailGetWithPostMethod(this.data.id)
      .subscribe((res: any) => {
        console.log(res);
        this.RESTAURANT = res.data;
      })
  }

}
