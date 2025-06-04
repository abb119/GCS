import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstYearPage } from './first-year.page';

const routes: Routes = [
  {
    path: '',
    component: FirstYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstYearPageRoutingModule {}
