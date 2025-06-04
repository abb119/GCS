import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondYearPageRoutingModule } from './second-year-routing.module';

import { SecondYearPage } from './second-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondYearPageRoutingModule
  ],
  declarations: [SecondYearPage]
})
export class SecondYearPageModule {}
