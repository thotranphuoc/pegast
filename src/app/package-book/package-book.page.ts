import { Component, OnInit } from '@angular/core';
import { PegastService } from '../services/pegast.service';
import { AppService } from '../services/app.service';
import { NavParService } from '../services/nav-par.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-package-book',
  templateUrl: './package-book.page.html',
  styleUrls: ['./package-book.page.scss'],
})
export class PackageBookPage implements OnInit {
  minYear: any;
  maxYear: any;
  PKG: any[] = [];
  FIRSTNAME: any='';
  LASTNAME: any='';
  BIRTHDAY: any='';
  EMAIL: any='';
  PHONE: any='';
  CELLPHONE: any='';
  ADDRESS: any='';
  STARTDAY: any='';
  SEATS: any='';
  INFANT: any='';
  EXPECTEDAGE: any='';
  CITIZENSHIPID: any='';
  GUID: any='';
  TOBEPAID: any='';
  VERIFICATIONCODE: any='';

  constructor(
    private pegastService: PegastService,
    private appService: AppService,
    private navParService: NavParService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.getYears();
    this.PKG=this.navParService.getter();
    console.log(this.PKG);
  }

  getYears() {
    let date = new Date();
    let YEAR = date.getFullYear();
    console.log(YEAR);
    this.minYear = YEAR;
    this.maxYear = this.minYear + 2;
  }

  bookingPkg(){


    
    let result = this.pegastService.packageBook(this.PKG, this.FIRSTNAME, this.LASTNAME, this.BIRTHDAY, this.EMAIL, this.PHONE, this.CELLPHONE, this.ADDRESS, this.STARTDAY, this.SEATS, this.INFANT, this.EXPECTEDAGE, this.CITIZENSHIPID, this.GUID, this.TOBEPAID, this.VERIFICATIONCODE);
    result.subscribe((res:any)=>{
      console.log(res.IsSucceeded);
      if(res.IsSucceeded=="true")
      {
          this.appService.presentAlert(null,"Success","Booking successfull!!","OK");
      }
      else
      {
        this.appService.presentAlert(null,"Fail","Booking fail!! " + res.AgencyAccessDeniedReason,"OK");
      }
    })
    
  }

    async bookingAlertConfirm() {
      const alert = await this.alertCtrl.create({
        header: 'Confirm!',
        message: 'Are you sure booking!!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: () => {
              //console.log('Confirm Okay');
              this.bookingPkg();
            }
          }
        ]
      });
  
      await alert.present();
    }

}
