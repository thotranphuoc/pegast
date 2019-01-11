import { Component, OnInit } from '@angular/core';
import { Slides } from '@ionic/angular';
import { PegasService } from '../../services/pegas.service';

@Component({
  selector: 'app-hotdeal-slider',
  templateUrl: './hotdeal-slider.component.html',
  styleUrls: ['./hotdeal-slider.component.scss']
})
export class HotdealSliderComponent implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  DEALS = [];
  constructor( private pegasService: PegasService) { }

  ngOnInit() {

    this.getHotDeal();
  }

  getHotDeal(){
    this.pegasService.hotDealsGetWithPostMethod()
      .subscribe((res: any) => {
        console.log(res);
        this.DEALS = [];
        this.DEALS = res.data;

        this.DEALS = this.DEALS.filter(deal=> deal.addtohotdeal =='1')
        console.log(this.DEALS);
      })
  }

  slidesDidLoad(slides: Slides) {
    slides.startAutoplay();
  }

}
