import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavParService } from '../nav-par.service';
import { LocalService } from '../local.service';
import { iDEALBOOKING } from '../interface/pegas.interface';
import { PegasService } from '../pegas.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading.service';
import { AppService } from '../app.service';
import { iProfile } from '../interface/profile.interface';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dealbook',
  templateUrl: './dealbook.page.html',
  styleUrls: ['./dealbook.page.scss'],
})
export class DealbookPage implements OnInit {
  data: any;
  BOOKING: iDEALBOOKING = this.localService.DEAL_BOOKING_DEFAULT;
  PROFILE: iProfile;
  DEAL_ID;
  constructor(
    private navCtrl: NavController,
    private navPar: NavParService,
    private localService: LocalService,
    private pegasService: PegasService,
    private loadingService: LoadingService,
    private appService: AppService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.BOOKING.DEAL_ID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProfile();
  }

  ngOnInit() {

  }

  getProfile() {
    this.authService.profileGet()
      .then((res: any) => {
        console.log(res);
        this.PROFILE = res.PROFILE;
        this.BOOKING.Name = this.PROFILE.NameF + ' ' + this.PROFILE.NameL;
        this.BOOKING.Phone = this.PROFILE.Phone;
        this.BOOKING.Email = this.PROFILE.Mail;
        this.BOOKING.Passport = this.PROFILE.Passport;
        console.log(this.PROFILE);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  completeBooking() {
    console.log(this.BOOKING);
    let BOOKINGDATA = {
      act: 'bookings',
      booking_id: 'BOOKING.booking_id',
      package_id: this.BOOKING.DEAL_ID,
      user_id: this.PROFILE.OTHER.ID,
      date_start: this.BOOKING.DateFrom,
      date_end: this.BOOKING.DateTo,
      guestno: this.BOOKING.Adults,
      booking_state: 'BOOKED',
      toGuest: 'html format to guest',
      emailGuest: this.BOOKING.Email,
      toAdmin: 'html for mal to admin',
      emailAdmin: 'tho@enablecode.vn'
    }

    let email2Guest = `
      Dear <strong>`+ this.BOOKING.Name + `</strong>,<br>
      <br>
      Our staff will contact you soon to process this booking.<br>
      <br>
      Your booking detail:<br>
      * Adult: `+ this.BOOKING.Adults + `<br>
      * Child: `+ this.BOOKING.Childs + `<br>
      * Note: <i>"`+ this.BOOKING.Note + `"</i><br>
      * Deal Link: <a href="https://pegast-app.firebaseapp.com/hotdeal/`+ this.BOOKING.DEAL_ID + `">https://pegast-app.firebaseapp.com/deal/` + this.BOOKING.DEAL_ID + `</a><br>
      <br>
      Thanks for choosing us<br>
      <strong>Pegas Team</strong>
    `;

    let email2Admin = `
      Dear <strong>Admin</strong>,<br>
      <br>
      New booking detail:<br>
      * Name: `+ this.BOOKING.Name + `<br>
      * Emal: `+ this.BOOKING.Email + `<br>
      * Phone: <a href="tel:+`+ this.BOOKING.Phone + `">` + this.BOOKING.Phone + `</a><br>
      * Passport: `+ this.BOOKING.Passport + `<br>
      * From: `+ this.BOOKING.DateFrom + `<br>
      * To: `+ this.BOOKING.DateTo + `<br>
      * Adult: `+ this.BOOKING.Adults + `<br>
      * Child: `+ this.BOOKING.Childs + `<br>
      * Note: <i>"`+ this.BOOKING.Note + `"</i><br>
      * Deal Link: <a href="https://pegast-app.firebaseapp.com/deal/`+ this.BOOKING.DEAL_ID + `">https://pegast-app.firebaseapp.com/hotdeal/` + this.BOOKING.DEAL_ID + `</a><br>
      <br>
      Please contact customer soon. Thanks<br>
      <strong>Pegas Touristik App</strong>
    `
    BOOKINGDATA.toGuest = email2Guest;
    BOOKINGDATA.toAdmin = email2Admin;
    this.loadingService.startLoading();
    this.pegasService.hotDealBookingMake(BOOKINGDATA).toPromise()
      .then((res) => {
        console.log(res);
        this.navCtrl.navigateRoot('home');
        this.loadingService.hideLoading();
        this.appService.presentToast('Success, please check your email', 5000);
      })
      .catch((err) => {
        console.log(err);
        this.loadingService.hideLoading();
      })
    // .subscribe(data => {
    //   console.log(data);
    //   this.navCtrl.navigateRoot('home');
    // })
  }
}
