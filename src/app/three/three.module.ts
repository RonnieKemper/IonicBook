import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { threePage } from './three.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { threePageRoutingModule } from './three-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: threePage }]),
    threePageRoutingModule,
  ],
  declarations: [threePage]
})
export class threePageModule {}
