import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NavController, Slides } from '@ionic/angular';
import { updateStyleProp } from '@angular/core/src/render3/styling';
import { LocalService } from '../services/local.service';
import { PegasService } from '../services/pegas.service';
// import { url } from 'inspector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  n: number = 0;
  isActivated: boolean = false;
  isSigned: boolean = false;
  DEALS = [];
  constructor(
    private navCtrl: NavController,
    private localService: LocalService,
    private pegasService: PegasService
  ) {
    // setTimeout(() => {
    //   this.listPro();
    // }, 2000);
    this.isSigned = this.localService.ACCOUNT.isSigned;
  }
  go2Page(url: string) {
    console.log('go2page', url);
    this.navCtrl.navigateForward(url);
  }

  ngOnInit() {
    this.isActivated = true;
    // this.changeImages4Background();
    this.getHotDeal();

  }


  ngOnDestroy() {
    this.isActivated = false;
    console.log('onDestroy');
  }

  changeImages4Background() {
    setInterval(() => {
      if (this.isActivated) this.changeBackGroundImage()
    }, 5000);
  }



  changeBackGroundImage() {
    if (this.n < 3) {
      this.n++;
    } else {
      this.n = 0;
    }
    let URL = '../../assets/imgs/bg' + this.n.toString() + '.jpg';
    let url = "url(\"https://cluboto.net/upload/1542277286img1.jpg" + this.n.toString() + ".jpg\")";
    console.log(URL);
    console.log(url);
    let docEl: HTMLElement = document.getElementById('body');
    // docEl.style.backgroundImage = "url('"+URL+"')"
    docEl.style.backgroundImage = url;
  }

  // listPro() {
  //   var element = document.getElementById("body");
  //   var out = "";
  //   var elementStyle = element.style;
  //   var computedStyle = window.getComputedStyle(element, null);

  //   for (let prop in elementStyle) {
  //     if (elementStyle.hasOwnProperty(prop)) {
  //       out += "  " + prop + " = '" + elementStyle[prop] + "' > '" + computedStyle[prop] + "'\n";
  //     }
  //   }
  //   console.log(out)
  // }


  getHotDeal() {
    this.pegasService.hotDealsGetWithPostMethod()
      .subscribe((res: any) => {
        console.log(res);
        this.DEALS = [];
        this.DEALS = res.data;

        this.DEALS = this.DEALS.filter(deal => deal.addtohotdeal == '1')
        console.log(this.DEALS);
      })
  }

  slidesDidLoad(slides: Slides) {
    slides.startAutoplay();
  }
}
