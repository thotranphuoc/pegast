import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsuranceDocumentPage } from './insurance-document.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceDocumentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsuranceDocumentPage]
})
export class InsuranceDocumentPageModule {}
