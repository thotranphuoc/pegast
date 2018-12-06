import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PegasService } from '../services/pegas.service';
import { NavParService } from '../services/nav-par.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {

  DRINKS = [];
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private navParService: NavParService
  ) { }
  ngOnInit() {
    this.getDrinks();
  }

  getDrinks() {
    this.pegasService.drinksGetWithPostMethod()
      .subscribe((res: any) => {
        console.log(res);
        this.DRINKS = res.data;
      })
  }

  go2Drink(DRINK) {
    this.navCtrl.navigateForward('/drink')
    this.navParService.setter(DRINK);
  }

}
