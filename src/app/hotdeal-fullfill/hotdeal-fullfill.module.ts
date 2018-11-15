import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HotdealFullfillPage } from './hotdeal-fullfill.page';

const routes: Routes = [
  {
    path: '',
    component: HotdealFullfillPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotdealFullfillPage]
})
export class HotdealFullfillPageModule {}
