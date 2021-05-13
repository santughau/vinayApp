import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaptopPage } from './laptop.page';

const routes: Routes = [
  {
    path: '',
    component: LaptopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaptopPageRoutingModule {}
