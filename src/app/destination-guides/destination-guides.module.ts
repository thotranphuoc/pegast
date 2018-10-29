import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DestinationGuidesPage } from './destination-guides.page';

const routes: Routes = [
  {
    path: '',
    component: DestinationGuidesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DestinationGuidesPage]
})
export class DestinationGuidesPageModule {}
