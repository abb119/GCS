import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSubjectsPage } from './manage-subjects.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSubjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageSubjectsPageRoutingModule {}
