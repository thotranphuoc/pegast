import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelJournalPage } from './travel-journal.page';

const routes: Routes = [
  {
    path: '',
    component: TravelJournalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelJournalPage]
})
export class TravelJournalPageModule {}
