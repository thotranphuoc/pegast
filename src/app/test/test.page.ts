import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor( private pagasService: PegasService) { }

  ngOnInit() {
    // this.pagasService.hotelSearch().subscribe(data=>{ console.log( data)})
    // this.testWithWebserviceApiPost();
    this.getShops();
    // this.registration();
  }

  getResult(url){
    console.log(url);
    this.pagasService.getResponseFromUrl(url)
    .subscribe(data=>{
      console.log(data);
    })
    this.pagasService.hotelDirectionOptionsGet()
    .then((res)=>{ console.log(res)})
    .catch(err=>{ console.log(err)});
  }

  testWithWebserviceApiPost(){
    this.pagasService.registerPegas();
  }

  getShops(){
    this.pagasService.shopsGetWithPostMethod()
    .subscribe((data)=>{
      console.log(data);
    })
  }

  getShopDetail(ID: string){
    this.pagasService.shopDetailGetWithPostMethod(ID)
    .subscribe((data)=>{
      console.log(data);
    })
  }

  registration(){
    this.pagasService.accountRegistration('Tho','Tran','tho@enablecode.vn','1','12345678','A123456')
    .subscribe((data)=>{
      console.log(data);
    })
  }

}
