import { Component, OnInit } from '@angular/core';
import { PegastService } from '../services/pegast.service';
import { AppService } from '../services/app.service';
import { NavParService } from '../services/nav-par.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-package-book',
  templateUrl: './package-book.page.html',
  styleUrls: ['./package-book.page.scss'],
})
export class PackageBookPage implements OnInit {
  minYear: any;
  maxYear: any;
  PKG: any[] = [];
  constructor(
    private pegastService: PegastService,
    private appService: AppService,
    private navParService: NavParService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getYears();
    this.PKG=this.navParService.getter();

    console.log(this.PKG);
  }

  getYears() {
    let date = new Date();
    let YEAR = date.getFullYear();
    console.log(YEAR);
    this.minYear = YEAR;
    this.maxYear = this.minYear + 2;
  }

}
