import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PackagesxPage } from './packagesx.page';

const routes: Routes = [
  {
    path: '',
    component: PackagesxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PackagesxPage]
})
export class PackagesxPageModule {}
