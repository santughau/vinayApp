import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrinterPartsDetailsPage } from './printer-parts-details.page';

const routes: Routes = [
  {
    path: '',
    component: PrinterPartsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrinterPartsDetailsPageRoutingModule {}
