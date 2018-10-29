import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-booking-policy',
  templateUrl: './booking-policy.page.html',
  styleUrls: ['./booking-policy.page.scss'],
})
export class BookingPolicyPage implements OnInit {
  myHTML_EN;
  myHTML_VN;
  constructor( private pegasService: PegasService) { }

  ngOnInit() {
    this.getBookingPolicy();
  }

  getBookingPolicy(){
    this.pegasService.policyGet()
    .subscribe((res: any)=> {
      console.log(res);
      this.myHTML_EN = res.data.content_en;
      this.myHTML_VN = res.data.content_vn;
      document.getElementById('myHTML_EN').innerHTML=this.myHTML_EN;
      document.getElementById('myHTML_VN').innerHTML=this.myHTML_VN;
    })
  }

}
