import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdYearPageRoutingModule } from './third-year-routing.module';

import { ThirdYearPage } from './third-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdYearPageRoutingModule
  ],
  declarations: [ThirdYearPage]
})
export class ThirdYearPageModule {}
