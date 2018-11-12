import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { PegasService } from '../pegas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private appService: AppService,
    private pegasService: PegasService
    ) { }

  ngOnInit() {
  }

  register(email, pw1, pw2) {
    if (pw1 !== pw2) {
      this.appService.presentAlert('Opps', '', 'passwords not matched', 'OK');
      return;
    }
    if (email.length < 1 || pw1.length < 1 || pw2.length < 1){
      this.appService.presentAlert('Opps', '', 'Please fill info', 'OK');
      return;
    }

    console.log(email,pw1,pw2);
    this.pegasService.accountRegister(email, pw1)
    .subscribe((res: any)=>{
      console.log(res);
      if(true){
        this.appService.presentAlert('Success','','Register successful','OK');
      }else{
        this.appService.presentAlert('Oops','','Register fail','OK');
      }
    })
  }

}
