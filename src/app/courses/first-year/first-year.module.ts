import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstYearPageRoutingModule } from './first-year-routing.module';

import { FirstYearPage } from './first-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstYearPageRoutingModule
  ],
  declarations: [FirstYearPage]
})
export class FirstYearPageModule {}
