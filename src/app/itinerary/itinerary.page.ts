import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.page.html',
  styleUrls: ['./itinerary.page.scss'],
})
export class ItineraryPage implements OnInit {

  constructor(
    private pegasService: PegasService
  ) { }

  ngOnInit() {
    this.pegasService.itineraryGet('0')
    .subscribe((res)=>{
      console.log(res);
    })

   
    
  }

}
