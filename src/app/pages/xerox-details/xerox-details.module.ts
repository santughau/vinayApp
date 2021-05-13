import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XeroxDetailsPageRoutingModule } from './xerox-details-routing.module';

import { XeroxDetailsPage } from './xerox-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XeroxDetailsPageRoutingModule
  ],
  declarations: [XeroxDetailsPage]
})
export class XeroxDetailsPageModule {}
