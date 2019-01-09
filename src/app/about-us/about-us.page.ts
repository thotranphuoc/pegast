import { Component, OnInit } from '@angular/core';
import { PegasService } from '../services/pegas.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  myHTML_EN;
  myHTML_VN;
  constructor( private pegasService: PegasService) { }

  ngOnInit() {
    this.pegasService.aboutUsGet().subscribe((res: any)=>{
      console.log(res);
      this.myHTML_EN = res.data.content_en;
      this.myHTML_VN = res.data.content_vn;
      document.getElementById('myHTML_EN').innerHTML=this.myHTML_EN;
      // document.getElementById('myHTML_VN').innerHTML=this.myHTML_VN;
    })
  }

}
