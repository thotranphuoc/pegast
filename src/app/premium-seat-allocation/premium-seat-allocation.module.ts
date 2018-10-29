import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PremiumSeatAllocationPage } from './premium-seat-allocation.page';

const routes: Routes = [
  {
    path: '',
    component: PremiumSeatAllocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PremiumSeatAllocationPage]
})
export class PremiumSeatAllocationPageModule {}
