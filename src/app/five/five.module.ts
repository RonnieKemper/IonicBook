import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fivePage } from './five.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { fivePageRoutingModule } from './five-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: fivePage }]),
    fivePageRoutingModule,
  ],
  declarations: [fivePage]
})
export class fivePageModule {}
