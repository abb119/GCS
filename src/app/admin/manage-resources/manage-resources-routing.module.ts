import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageResourcesPage } from './manage-resources.page';

const routes: Routes = [
  {
    path: '',
    component: ManageResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageResourcesPageRoutingModule {}
