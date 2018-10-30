import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsSpecialDetailPage } from './news-special-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NewsSpecialDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsSpecialDetailPage]
})
export class NewsSpecialDetailPageModule {}
