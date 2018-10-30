import { Component, OnInit } from '@angular/core';
import { NavParService } from '../nav-par.service';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-hotdeal',
  templateUrl: './hotdeal.page.html',
  styleUrls: ['./hotdeal.page.scss'],
})
export class HotdealPage implements OnInit {
  DEAL: any;
  DEALINFO: any;
  myHTML: any;
  constructor(
    private navParService: NavParService,
    private pegasService: PegasService
  ) { }

  ngOnInit() {
    this.DEAL = this.navParService.getter();
    console.log(this.DEAL);
    this.pegasService.hotDealDetailGetWithPostMethod(this.DEAL.id)
    .subscribe((data)=>{
      console.log(data);
      this.DEALINFO = data;
      this.myHTML = this.DEALINFO.data.content_vn;
      document.getElementById('myHTML').innerHTML = this.myHTML;
    })
  }

}
