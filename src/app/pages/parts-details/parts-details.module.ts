import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartsDetailsPageRoutingModule } from './parts-details-routing.module';

import { PartsDetailsPage } from './parts-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartsDetailsPageRoutingModule
  ],
  declarations: [PartsDetailsPage]
})
export class PartsDetailsPageModule {}
