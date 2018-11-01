import { Component, OnInit } from '@angular/core';
import { NavParService } from '../nav-par.service';
import { PegasService } from '../pegas.service';
import { LocalService } from '../local.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-hotdeal',
  templateUrl: './hotdeal.page.html',
  styleUrls: ['./hotdeal.page.scss'],
})
export class HotdealPage implements OnInit {
  DEAL: any;
  DEALINFO: any;
  myHTML: any;
  ACCOUNT;
  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private navParService: NavParService,
    private pegasService: PegasService,
    private localService: LocalService
  ) { }

  ngOnInit() {
    this.DEAL = this.navParService.getter();
    console.log(this.DEAL);
    this.pegasService.hotDealDetailGetWithPostMethod(this.DEAL.id)
      .subscribe((data) => {
        console.log(data);
        this.DEALINFO = data;
        this.myHTML = this.DEALINFO.data.content_vn;
        document.getElementById('myHTML').innerHTML = this.myHTML;
      })
  }

  doProcessBooking() {
    this.ACCOUNT = this.localService.ACCOUNT;
    if (!this.ACCOUNT.isSigned) {
      this.loginAlertConfirm();
    }else{
      this.bookingAlertConfirm();
    }
    
  }

  async loginAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Please login first to continue',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.doLoginProcess();
          }
        }
      ]
    });

    await alert.present();
  }

  async bookingAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure to booking this one?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.doConfirmedBookAlert()
            .then(()=>{
              this.navCtrl.navigateRoot('home');
            })
          }
        }
      ]
    });

    await alert.present();
  }

  doLoginProcess() {
    this.navCtrl.navigateForward('login');
  }

  // goBookingProcess(){
  //   console.log('alert here');
  // }


  async doConfirmedBookAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Booking logged',
      message: 'Hi <strong>'+this.ACCOUNT.profile.firstname+'</strong>. Your booking is now confirmed. Our staff will contact you as soon as possible to proceed your booking. Thank you',
      buttons: ['OK']
    });

    await alert.present();
  }

}
