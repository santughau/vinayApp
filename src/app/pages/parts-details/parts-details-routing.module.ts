import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartsDetailsPage } from './parts-details.page';

const routes: Routes = [
  {
    path: '',
    component: PartsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartsDetailsPageRoutingModule {}
