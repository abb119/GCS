import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeNotesPage } from './practice-notes.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeNotesPageRoutingModule {}
