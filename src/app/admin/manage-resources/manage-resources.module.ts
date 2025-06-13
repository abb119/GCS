import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageResourcesPageRoutingModule } from './manage-resources-routing.module';

import { ManageResourcesPage } from './manage-resources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageResourcesPageRoutingModule
  ],
  declarations: [ManageResourcesPage]
})
export class ManageResourcesPageModule {}
