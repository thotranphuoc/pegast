import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';
import { LocalService } from '../local.service';
// import { iProfile } from '../interface/pegas.interface';
import { ModalController, NavController, AlertController, Thumbnail } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { iProfile } from '../interface/profile.interface';
import { AuthService } from '../auth.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  PROFILE: iProfile;
  UID = '';
  constructor(
    private pegasService: PegasService,
    private localService: LocalService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private alertController: AlertController,
    private authService: AuthService,
    private appService: AppService
  ) {
    this.PROFILE = this.localService.PROFILE_DEFAULT;
    // this.checkIfLogin();
    console.log('constructor');
  }

  ngOnInit() {
    // this.checkIfLogin();
    // let id = this.localService.ACCOUNT.id;
    // this.getProfile(id);
    this.getProfileFB();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    // this.checkIfLogin();
  }

  getProfileFB(){
    setTimeout(() => {
      this.UID = this.authService.getCurrentUser().uid;
      this.pegasService.profileGet_FB(this.UID).then((res)=>{
        this.PROFILE = <iProfile>res.data();
      })
    }, 1000);
  }
  // checkIfLogin() {
  //   // let ID = '17';
  //   let ACCOUNT = this.localService.ACCOUNT;
  //   // let ID = this.localService.ACCOUNT.id;
  //   let ID = ACCOUNT.id;
  //   this.PROFILE = ACCOUNT.profile;
  //   console.log(ACCOUNT, this.PROFILE);
  //   if (ID) {
  //     if (this.PROFILE.Mail.length < 1) {
  //       this.getProfile(ID)
  //     }
  //   } else {
  //     this.presentAlertConfirm();
  //   }
  // }

  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     // header: 'Confirm!',
  //     message: 'Please login first',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'OK',
  //         handler: () => {
  //           console.log('Confirm Okay');
  //           this.doLoginProcess();
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  // async presentModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: LoginPage,
  //     componentProps: { value: '123' }
  //   })
  //   return await modal.present();
  // }

  // doLoginProcess() {
  //   this.navCtrl.navigateForward('login');
  // }

  // getProfile(ID) {
  //   console.log(ID)
  //   this.pegasService.profileGet(ID)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       this.PROFILE = res.data;
  //       this.localService.ACCOUNT.profile = this.PROFILE;
  //     });
  // }

  saveProfile() {
    console.log(this.localService.ACCOUNT);
    let UID = this.authService.accoutnCurrentUser().uid;
    this.PROFILE.UID = UID;
    this.PROFILE.OTHER = { ID: '17'};
    console.log(this.PROFILE)
    this.pegasService.profileCreate_FB(this.PROFILE)
      .then((res) => {
        console.log(res);
        this.appService.presentToast('Profile updated successfully', 3000);
      })
      .catch((err) => {
        console.log(err);
      })
    // this.pegasService.profileUpdate(this.PROFILE).subscribe((data) => {
    //   console.log(data)
    // })
  }

}
