import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaptopDetailsPage } from './laptop-details.page';

const routes: Routes = [
  {
    path: '',
    component: LaptopDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaptopDetailsPageRoutingModule {}
