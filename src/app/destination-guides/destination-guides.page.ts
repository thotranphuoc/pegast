import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-destination-guides',
  templateUrl: './destination-guides.page.html',
  styleUrls: ['./destination-guides.page.scss'],
})
export class DestinationGuidesPage implements OnInit {
  GUIDES=[];
  constructor(
    private pegasService: PegasService
  ) { }

  ngOnInit() {
    this.getDestinationGuide();
  }

  getDestinationGuide(){
    let UserID = '17';
    this.pegasService.destinationGuideGet(UserID)
    .subscribe((res: any)=>{
      console.log(res);
      this.GUIDES = res.data;
    })
  }

}
