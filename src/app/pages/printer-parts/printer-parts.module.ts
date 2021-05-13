import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrinterPartsPageRoutingModule } from './printer-parts-routing.module';

import { PrinterPartsPage } from './printer-parts.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule, Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    PrinterPartsPageRoutingModule
  ],
  declarations: [PrinterPartsPage]
})
export class PrinterPartsPageModule { }
