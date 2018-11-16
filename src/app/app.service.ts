import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { PegasService } from './pegas.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    public alertController: AlertController,
    private toastController: ToastController,
    private pegasService: PegasService,
    private localService: LocalService
    ) { }

  async presentAlert(HEADER, SUBTITLE, MSG, BTN) {
    const alert = await this.alertController.create({
      header: HEADER,
      subHeader: SUBTITLE,
      message: MSG,
      buttons: [BTN]
    });

    await alert.present();
  }

  async presentAlertPrompt2Login() {
    const alert = await this.alertController.create({
      header: 'Login',
      inputs: [
        {
          name: 'username',
          // type: 'text',
          placeholder: 'Username'
        },
        {
          name: 'password',
          type: 'password',
          // id: 'name2-id',
          // value: 'hello',
          placeholder: 'Password'
        },
        // {
        //   name: 'name3',
        //   value: 'http://ionicframework.com',
        //   // type: 'url',
        //   placeholder: 'Favorite site ever'
        // },
        // // input date with min & max
        // {
        //   name: 'name4',
        //   // type: 'date',
        //   min: '2017-03-01',
        //   max: '2018-01-12'
        // },
        // // input date without min nor max
        // {
        //   name: 'name5',
        //   type: 'date'
        // },
        // {
        //   name: 'name6',
        //   type: 'number',
        //   min: -5,
        //   max: 10
        // },
        // {
        //   name: 'name7',
        //   type: 'number'
        // }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.pegasService.accountLogin(data.username, data.password)
            .subscribe((res: any)=>{
              console.log(res);
              this.localService.ACCOUNT.id = res.data.id;
              this.pegasService.profileGet(res.data.id)
              .subscribe((res1: any)=>{
                console.log(res1);
                this.localService.ACCOUNT.profile = res1.data;
              })
            })
          }
        }
      ]
    });

    await alert.present();
  }


  async presentToast(MSG: string, DURATION: number) {
    const toast = await this.toastController.create({
      message: MSG,
      duration: DURATION
    });
    toast.present();
  }
}
