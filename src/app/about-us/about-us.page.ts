import { Component, OnInit } from '@angular/core';
import { PegasService } from '../services/pegas.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  ABOUTUS: any;
  constructor( private pegasService: PegasService) { }

  ngOnInit() {
    this.pegasService.aboutUsGet().subscribe(data=>{
      console.log(data);
    })
  }

}
