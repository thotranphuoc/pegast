import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  ACCOUNT;
  constructor( 
    private navCtrl: NavController,
    private localService: LocalService
    ) { }

  ngOnInit() {
    this.ACCOUNT = this.localService.ACCOUNT;
  }


  go2Page(page: string){
    this.navCtrl.navigateForward(page);
  }

  logout(){
    this.localService.ACCOUNT = this.localService.ACCOUNT_INIT;
    this.ACCOUNT = this.localService.ACCOUNT;
  }

}
