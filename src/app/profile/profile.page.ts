import { Component, OnInit } from '@angular/core';
import { PegasService } from '../pegas.service';
import { LocalService } from '../local.service';
import { iProfile } from '../interface/pegas.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  PROFILE: iProfile;
  constructor(
    private pegasService: PegasService,
    private localService: LocalService
  ) { 
    this.PROFILE = this.localService.PROFILE_DEFAULT;
  }

  ngOnInit() {
    let ID = '17';
    this.pegasService.profileGet(ID)
      .subscribe((res: any) => {
        console.log(res);
        this.PROFILE = res.data;
      });
  }

  saveProfile(){
    console.log(this.PROFILE)
    this.pegasService.profileUpdate(this.PROFILE).subscribe((data)=>{
      console.log(data)
    })
  }

}
