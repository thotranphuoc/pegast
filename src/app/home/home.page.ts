import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { updateStyleProp } from '@angular/core/src/render3/styling';
// import { url } from 'inspector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  n: number = 0;
  constructor(private navCtrl: NavController) {
    // setTimeout(() => {
    //   this.listPro();
    // }, 2000);
  }
  go2Page(url: string) {
    this.navCtrl.navigateForward(url);
  }

  ngOnInit() {
    this.changeImages4Background();
  }

  changeImages4Background() {
    setInterval(() => {
      this.changeBackGroundImage()
    }, 5000);
  }

  changeBackGroundImage() {
    if (this.n < 3) {
      this.n++;
    } else {
      this.n = 0;
    }
    let URL = '../../assets/imgs/bg' + this.n.toString() + '.jpg';
    let url = "url(\"../../assets/imgs/bg"+this.n.toString()+".jpg\")";
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
}
