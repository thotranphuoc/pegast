import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: any;
  count: number = 0;
  isLoading: boolean = false;
  constructor(
    private loadingCtrl: LoadingController
  ) { }


  async startLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 10000
    });
    return await this.loading.present();
  }

  async presentLoadingWithOptions() {
    this.loading = await this.loadingCtrl.create({
      spinner: 'lines',
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.loading.present();
  }



  // startLoading() {
  //   if (!this.isLoading) {
  //     this.loading = this.loadingCtrl.create({
  //       content: 'Please wait....',
  //       spinner: 'crescent'
  //     });
  //     // this.count++;
  //     this.isLoading = true;
  //     this.loading.present().then((res) => {

  //       console.log('loading start', this.count, this.isLoading);
  //       setTimeout(() => {
  //         console.log('loading stop after timeout', this.count, this.isLoading);
  //         this.hideLoading();
  //         // alert('Please turn on internet and location permission. Then open app again')
  //       }, 5000)
  //     })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   }

  // }

  // startLoadingWithMessage(MESSAGE: string) {
  //   if (!this.isLoading) {
  //     this.loading = this.loadingCtrl.create({
  //       content: MESSAGE,
  //       spinner: 'crescent'
  //     });
  //     // this.count++;
  //     this.isLoading = true;
  //     this.loading.present().then((res) => {

  //       console.log(MESSAGE + 'start..', this.count, this.isLoading);
  //       setTimeout(() => {
  //         console.log(MESSAGE + ' stop after timeout', this.count, this.isLoading);
  //         this.hideLoading();
  //         // alert('Please turn on internet and location permission. Then open app again')
  //       }, 5000)
  //     })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   }

  // }

  hideLoading() {
    if (typeof (this.loading) !== 'undefined') {
      this.loading.dismiss()
        .then((res) => {
          // this.count = 0;
          this.isLoading = false;
          console.log('loading stop', res, this.count, this.isLoading);
        })
        .catch((err) => { console.log(err) });
    }
  }
}