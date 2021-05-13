import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XeroxDetailsPage } from './xerox-details.page';

const routes: Routes = [
  {
    path: '',
    component: XeroxDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XeroxDetailsPageRoutingModule {}
