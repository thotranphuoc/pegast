import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';
import { LocalService } from '../local.service';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isSignedIn = false;
  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private localService: LocalService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.checkIfSigned();
  }

  checkIfSigned() {
    setTimeout(() => {
      this.isSignedIn = this.authService.isSigned();
      console.log(this.isSignedIn);
    }, 1000);
  }

  // Login with Firebase
  login(email: string, pw: string) {
    console.log(email, pw);
    this.authService.accountSignIn(email, pw)
      .then((res: any) => {
        console.log(res);
        this.navCtrl.goBack();
        // console.log(res.data.id);
        // let ID = res.data.id;
        // this.localService.ACCOUNT.isSigned = true;
        // this.localService.ACCOUNT.email = email;
        // this.localService.ACCOUNT.id = res.data.id;
        // return this.pegasService.profileGet(ID).toPromise();
      })
      // .then((res1: any) => {
      //   console.log(res1);
      //   this.localService.ACCOUNT.profile = res1.data;
      //   this.navCtrl.goBack();
      // })
      .catch((err) => {
        console.log(err);
      })
  }

  // // login with pegas service
  // login2(email: string, pw: string) {
  //   console.log(email, pw);
  //   this.authService.accountLogin(email, pw)
  //     .then((res: any) => {
  //       console.log(res);
  //       console.log(res.data.id);
  //       let ID = res.data.id;
  //       this.localService.ACCOUNT.isSigned = true;
  //       this.localService.ACCOUNT.email = email;
  //       this.localService.ACCOUNT.id = res.data.id;
  //       return this.pegasService.profileGet(ID).toPromise();
  //     })
  //     .then((res1: any) => {
  //       console.log(res1);
  //       this.localService.ACCOUNT.profile = res1.data;
  //       this.navCtrl.goBack();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  login1(email: string, pw: string) {
    console.log(email, pw);
    this.pegasService.accountLogin(email, pw)
      .subscribe((res: any) => {
        console.log(res);
        if (res.status === 'Success') {
          this.localService.ACCOUNT.isSigned = true;
          this.localService.ACCOUNT.email = email;
          this.localService.ACCOUNT.id = res.data.id;
          this.pegasService.profileGet(res.data.id)
            .subscribe((res: any) => {
              console.log(res);
              this.localService.ACCOUNT.profile = res.data;
            })
          this.navCtrl.goBack();
        }
      })
  }

  loginWithGg(){
    this.authService.accountSignUpWithGmail();
  }

  loginWithFb(){
    this.authService.accountLoginWithFacebook();
  }

}
