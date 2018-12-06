import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocalService } from '../services/local.service';
import { AuthService } from '../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  ACCOUNT;
  isSigned = false;
  constructor(
    private navCtrl: NavController,
    private localService: LocalService,
    private authService: AuthService,
    private router: Router
  ) {
    console.log('AccountPage')
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad')
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter')
    this.checkIfSigned();
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter')
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave')
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave')
  }
  ionViewWillUnload() {
    console.log('ionViewWillUnload')
  }
  ionViewCanEnter() {
    console.log('ionViewCanEnter')
  }
  ionViewCanLeave() {
    console.log('ionViewCanLeave')
  }
  ngOnInit() {
    this.ACCOUNT = this.localService.ACCOUNT;
    this.checkIfSigned();
  }

  // ngOnChanges() {
  //   console.log('ngOnChanges')
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck')
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit')
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked')
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit')
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked')
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy')
  // }

  checkIfSigned() {
    setTimeout(() => {
      this.isSigned = this.authService.isSigned()
    }, 1000);
  }

  go2Page(page: string) {
    this.navCtrl.navigateForward(page);
  }

  logout() {
    // this.localService.ACCOUNT = this.localService.ACCOUNT_INIT;
    // this.ACCOUNT = this.localService.ACCOUNT;

    this.authService.accountSignOut().then((res) => {
      console.log(res);
      this.checkIfSigned();
    })
      .catch(err => {
        console.log(err)
      })
  }

}
