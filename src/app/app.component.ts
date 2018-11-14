import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalService } from './local.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    // { title: 'Profile', url: '/profile', icon: 'home' },
    // { title: 'My Trip', url: '/my-trip', icon: 'home' },
    { title: 'Locations', url: '/locations', icon: 'home' },
    // { title: 'Reservation', url: '/reservation', icon: 'home' },
    // { title: 'Travel journal', url: '/travel-journal', icon: 'home' },
    { title: 'News/Special', url: '/news-special', icon: 'home' },
    { title: 'Language', url: '/language', icon: 'home' },
    { title: 'Booking Policy', url: '/booking-policy', icon: 'home' },
    // { title: 'List', url: '/list', icon: 'list' },
    // { title: 'Hot Deals', url: '/deals', icon: 'list' },
    // { title: 'Login/Register', url: '/account', icon: 'list' },
    // { title: 'For Test', url: '/test', icon: 'list' },
    // { title: 'RxJS', url: '/rxjs', icon: 'list' }
  ];

  public appPages1 = [
    { title: 'Login/Register', url: '/account', icon: 'list' },
  ];

  public appPages2 = [
    { title: 'Profile', url: '/profile', icon: 'home' },
    { title: 'My Trip', url: '/my-trip', icon: 'home' },
    { title: 'Travel journal', url: '/travel-journal', icon: 'home' },
    { title: 'Logout', url: '/account', icon: 'list' },
  ];
  isSigned: boolean = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private localService: LocalService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  menuOpen(){
    console.log('menuOpen');
    this.isSigned = this.localService.ACCOUNT.isSigned
  }

}
