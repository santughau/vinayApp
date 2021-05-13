import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XeroxPageRoutingModule } from './xerox-routing.module';

import { XeroxPage } from './xerox.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule, Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    XeroxPageRoutingModule
  ],
  declarations: [XeroxPage]
})
export class XeroxPageModule { }
