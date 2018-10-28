import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VoucherWalletPage } from './voucher-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: VoucherWalletPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VoucherWalletPage]
})
export class VoucherWalletPageModule {}
