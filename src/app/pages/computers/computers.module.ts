import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComputersPageRoutingModule } from './computers-routing.module';

import { ComputersPage } from './computers.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule, Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    ComputersPageRoutingModule
  ],
  declarations: [ComputersPage]
})
export class ComputersPageModule {}
