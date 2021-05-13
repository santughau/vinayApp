import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrinterDetailsPage } from './printer-details.page';

const routes: Routes = [
  {
    path: '',
    component: PrinterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrinterDetailsPageRoutingModule {}
