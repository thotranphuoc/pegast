import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';
import { LocalService } from '../local.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private pegasService: PegasService,
    private localService: LocalService
  ) { }

  ngOnInit() {
  }

  login(email: string, pw: string) {
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

}
