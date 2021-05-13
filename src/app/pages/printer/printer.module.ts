import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrinterPageRoutingModule } from './printer-routing.module';

import { PrinterPage } from './printer.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule, Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    PrinterPageRoutingModule
  ],
  declarations: [PrinterPage]
})
export class PrinterPageModule {}
