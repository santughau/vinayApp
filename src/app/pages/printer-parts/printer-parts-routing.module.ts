import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrinterPartsPage } from './printer-parts.page';

const routes: Routes = [
  {
    path: '',
    component: PrinterPartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrinterPartsPageRoutingModule {}
