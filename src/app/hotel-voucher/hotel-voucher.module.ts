import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HotelVoucherPage } from './hotel-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: HotelVoucherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotelVoucherPage]
})
export class HotelVoucherPageModule {}
