import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-search-date',
  templateUrl: './search-date.page.html',
  styleUrls: ['./search-date.page.scss'],
})
export class SearchDatePage implements OnInit {
  date1 = '01/01/2000';
  date2 = '01/01/2000';
  DEALS = [];
  constructor(
    private pegasService: PegasService
  ) { }

  ngOnInit() {
  }

  changeDate1(ev){
    console.log(ev);
    let date = ev.detail.value;
    console.log(date);
    this.date1 = date.toString().substr(8,2)+'/'+date.toString().substr(5,2)+'/'+date.toString().substr(0,4)
  }

  changeDate2(ev){
    console.log(ev);
    let date = ev.detail.value;
    console.log(date);
    this.date2 = date.toString().substr(8,2)+'/'+date.toString().substr(5,2)+'/'+date.toString().substr(0,4)
  }

  shortDate(date: string){
    return date.substr(0,5);
  }

  getDeals(){
    this.pegasService.dealsGet().toPromise()
    .then((res: any)=>{
      console.log(res);
      this.DEALS = res.data;
    })
    .catch(err=>{
      console.log(err);
    })
  }

}
