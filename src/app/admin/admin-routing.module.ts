import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'manage-subjects',
    loadChildren: () =>
      import('./manage-subjects/manage-subjects.module').then(
        (m) => m.ManageSubjectsPageModule
      )
  },
  {
    path: 'manage-resources',
    loadChildren: () =>
      import('./manage-resources/manage-resources.module').then(
        (m) => m.ManageResourcesPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
