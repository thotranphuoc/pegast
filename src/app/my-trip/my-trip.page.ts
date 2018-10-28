import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-trip',
  templateUrl: './my-trip.page.html',
  styleUrls: ['./my-trip.page.scss'],
})
export class MyTripPage implements OnInit {

  constructor(
    private navCtrl: NavController,

  ) { }

  ngOnInit() {
  }

  go2Page(PAGE: string){
    this.navCtrl.navigateForward(PAGE);
  }

}
