import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotgraphyPage } from './photgraphy.page';

const routes: Routes = [
  {
    path: '',
    component: PhotgraphyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotgraphyPageRoutingModule {}
