import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PegasService } from '../services/pegas.service';
import { NavParService } from '../services/nav-par.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {

  data;
  DRINK;
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
    this.getDrinkDetail();
  }

  getDrinkDetail() {
    this.pegasService.drinkDetailGetWithPostMethod(this.data.id)
      .subscribe((res: any) => {
        console.log(res);
        this.DRINK = res.data;
      })
  }

}
