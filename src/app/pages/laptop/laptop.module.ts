import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaptopPageRoutingModule } from './laptop-routing.module';

import { LaptopPage } from './laptop.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule, Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    LaptopPageRoutingModule
  ],
  declarations: [LaptopPage]
})
export class LaptopPageModule { }
