import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheoryNotesPage } from './theory-notes.page';

const routes: Routes = [
  {
    path: '',
    component: TheoryNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheoryNotesPageRoutingModule {}
