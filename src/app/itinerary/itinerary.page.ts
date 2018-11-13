import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.page.html',
  styleUrls: ['./itinerary.page.scss'],
})
export class ItineraryPage implements OnInit {
  ITINERARIES = [];
  constructor(
    private pegasService: PegasService
  ) { }

  ngOnInit() {
    this.getItineraries();
  }

  getItineraries(){
    let UserID = '1';
    this.pegasService.itineraryGet(UserID,'0')
    .subscribe((res: any)=>{
      console.log(res);
      this.ITINERARIES = res.data;
    })
  }

}
