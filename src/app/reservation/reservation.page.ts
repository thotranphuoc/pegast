import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  go2Page(url: string){
    this.navCtrl.navigateForward(url);
  }
}
