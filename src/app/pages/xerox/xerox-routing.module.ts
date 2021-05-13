import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XeroxPage } from './xerox.page';

const routes: Routes = [
  {
    path: '',
    component: XeroxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XeroxPageRoutingModule {}
