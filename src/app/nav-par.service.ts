import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavParService {
  myParam: any;
  constructor() { }

  getter(){
    return this.myParam;
  }

  setter(param){
    this.myParam = param;
  }
  
}
