import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrinterPartsDetailsPageRoutingModule } from './printer-parts-details-routing.module';

import { PrinterPartsDetailsPage } from './printer-parts-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrinterPartsDetailsPageRoutingModule
  ],
  declarations: [PrinterPartsDetailsPage]
})
export class PrinterPartsDetailsPageModule {}
