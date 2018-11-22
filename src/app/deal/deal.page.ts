import { Component, OnInit } from '@angular/core';
import { NavParService } from '../nav-par.service';
import { PegasService } from '../pegas.service';
import { LocalService } from '../local.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { iProfile } from '../interface/profile.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.page.html',
  styleUrls: ['./deal.page.scss'],
})
export class DealPage implements OnInit {
  // DEAL: any;
  DEAL_ID: any;
  DEALINFO: any;
  myHTML: any;
  ACCOUNT;
  PROFILE: iProfile = null;
  isSigned = false;
  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private navParService: NavParService,
    private pegasService: PegasService,
    private localService: LocalService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getHotDealDetail();
  }

  getHotDealDetail() {
    // this.DEAL = this.navParService.getter();
    // console.log(this.DEAL);
    this.DEAL_ID = this.activatedRoute.snapshot.paramMap.get('id');
    this.pegasService.hotDealDetailGetWithPostMethod(this.DEAL_ID)
      .subscribe((data) => {
        console.log(data);
        this.DEALINFO = data;
        this.myHTML = this.DEALINFO.data.content_vn;
        document.getElementById('myHTML').innerHTML = this.myHTML;
      })
  }

  doProcessBooking() {
    this.PROFILE = this.localService.PROFILE;
    this.isSigned = this.authService.isSigned();
    if(this.isSigned){
      //get profile
      this.authService.profileGet().then((res: any)=>{
        this.PROFILE = res.PROFILE;
        this.bookingAlertConfirm();
      })
    }else{
      //go2login
      this.navCtrl.navigateForward('LoginPage');
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
    console.log(this.PROFILE);
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
            this.doHotDealFullFill();
            // this.doConfirmedBookAlert()
            //   .then(() => {
            //     this.bookingDeal();

            //   })
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

  doHotDealFullFill() {
  let data = {
      Hotdeal_ID: this.DEAL_ID,
      PROFILE: this.PROFILE
    }
    this.navParService.setter(data);
    this.navCtrl.navigateForward('/dealbook/'+this.DEAL_ID);
  }

  // async doConfirmedBookAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Success',
  //     subHeader: 'Booking logged',
  //     message: 'Hi <strong>' + this.ACCOUNT.profile.firstname + '</strong>. Your booking is now confirmed. Our staff will contact you as soon as possible to proceed your booking. Thank you',
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

  // bookingDeal() {
  //   let BOOKING = {
  //     booking_id: '0',
  //     package_id: this.DEAL_ID,
  //     user_id: this.localService.ACCOUNT.id,
  //     date_start: '2010/10/19',
  //     date_end: '2010/10/20',
  //     guestno: '4',
  //     booking_state: 'BOOKING',
  //   }

  //   this.pegasService.hotDealBookingMake(BOOKING)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.navCtrl.navigateRoot('home');
  //     })
  // }

}
