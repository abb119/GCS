import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdYearPage } from './third-year.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdYearPageRoutingModule {}
