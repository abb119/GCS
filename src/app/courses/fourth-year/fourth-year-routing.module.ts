import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourthYearPage } from './fourth-year.page';

const routes: Routes = [
  {
    path: '',
    component: FourthYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourthYearPageRoutingModule {}
