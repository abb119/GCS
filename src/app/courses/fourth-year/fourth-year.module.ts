import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourthYearPageRoutingModule } from './fourth-year-routing.module';

import { FourthYearPage } from './fourth-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FourthYearPageRoutingModule
  ],
  declarations: [FourthYearPage]
})
export class FourthYearPageModule {}
