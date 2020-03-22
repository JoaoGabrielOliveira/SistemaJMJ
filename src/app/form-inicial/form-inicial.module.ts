import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxCurrencyModule } from "ngx-currency";

import { IonicModule } from '@ionic/angular';

import { FormInicialPage } from './form-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: FormInicialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxCurrencyModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormInicialPage]
})
export class FormInicialPageModule {}
