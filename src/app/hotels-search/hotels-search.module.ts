import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HotelsSearchPage } from './hotels-search.page';

const routes: Routes = [
  {
    path: '',
    component: HotelsSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotelsSearchPage]
})
export class HotelsSearchPageModule {}
