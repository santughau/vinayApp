import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartsPageRoutingModule } from './parts-routing.module';

import { PartsPage } from './parts.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule, Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    PartsPageRoutingModule
  ],
  declarations: [PartsPage]
})
export class PartsPageModule {}
