import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-flight-eticket',
  templateUrl: './flight-eticket.page.html',
  styleUrls: ['./flight-eticket.page.scss'],
})
export class FlightEticketPage implements OnInit {
  FlightTicket: any;
  constructor(
    private pegasService: PegasService
  ) { }

  ngOnInit() {
    this.pegasService.flightTicketGet('0')
    .subscribe((res)=>{
      console.log(res);
    })

    this.pegasService.hotelVoucherGet('0')
    .subscribe((res)=>{
      console.log(res);
    })

    this.pegasService.insuranceGet('0')
    .subscribe((res)=>{
      console.log(res);
    })
    
  }

}
