import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNotesPage } from './add-notes.page';

const routes: Routes = [
  {
    path: '',
    component: AddNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNotesPageRoutingModule {}
