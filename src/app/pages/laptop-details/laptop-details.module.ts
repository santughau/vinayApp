import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaptopDetailsPageRoutingModule } from './laptop-details-routing.module';

import { LaptopDetailsPage } from './laptop-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaptopDetailsPageRoutingModule
  ],
  declarations: [LaptopDetailsPage]
})
export class LaptopDetailsPageModule {}
