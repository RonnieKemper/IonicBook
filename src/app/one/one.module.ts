import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { onePage } from './one.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { onePageRoutingModule } from './one-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: onePage }]),
    onePageRoutingModule,
  ],
  declarations: [onePage]
})
export class onePageModule {}
