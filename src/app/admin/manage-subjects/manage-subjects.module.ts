import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageSubjectsPageRoutingModule } from './manage-subjects-routing.module';

import { ManageSubjectsPage } from './manage-subjects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageSubjectsPageRoutingModule
  ],
  declarations: [ManageSubjectsPage]
})
export class ManageSubjectsPageModule {}
