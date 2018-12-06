import { Component, OnInit } from '@angular/core';
import { PegasService } from '../services/pegas.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-flight-eticket',
  templateUrl: './flight-eticket.page.html',
  styleUrls: ['./flight-eticket.page.scss'],
})
export class FlightEticketPage implements OnInit {
  FlightTickets: any[] = [];
  constructor(
    private pegasService: PegasService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.pegasService.flightTicketGet('1','0')
    .subscribe((res: any)=>{
      this.FlightTickets = res.data;
      console.log(this.FlightTickets);
    })
    
  }

  open_pdf(ITEM){
    window.open(ITEM.file);
  }

}
