import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotgraphyPageRoutingModule } from './photgraphy-routing.module';

import { PhotgraphyPage } from './photgraphy.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule, Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    PhotgraphyPageRoutingModule
  ],
  declarations: [PhotgraphyPage]
})
export class PhotgraphyPageModule {}
