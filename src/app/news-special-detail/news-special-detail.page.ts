import { Component, OnInit } from '@angular/core';
import { NavParService } from '../nav-par.service';
import { PegasService } from '../pegas.service';
import { LocalService } from '../local.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-news-special-detail',
  templateUrl: './news-special-detail.page.html',
  styleUrls: ['./news-special-detail.page.scss'],
})
export class NewsSpecialDetailPage implements OnInit {
  NEWSSPECIAL;
  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private navParService: NavParService,
    private pegasService: PegasService,
    private localService: LocalService
  ) { }

  ngOnInit() {
    this.NEWSSPECIAL = this.navParService.getter();
  }


  doProcessBooking() {
    let ACCOUNT = this.localService.ACCOUNT;
    if (!ACCOUNT.isSigned) {
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
              // this.navCtrl.navigateRoot('home');
              setTimeout(()=>{
                this.navCtrl.navigateRoot('home');
              },5000);
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
      message: 'Thank you. Your booking is now confirmed. Our staff will contact you as soon as possible to proceed your booking.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
