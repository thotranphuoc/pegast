import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit  {
  constructor(private navCtrl: NavController){

  }
  go2Page(url: string){
    this.navCtrl.navigateForward(url);
  }

  ngOnInit(){
    
  }

}
