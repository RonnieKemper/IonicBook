import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { twoPage } from './two.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { twoPageRoutingModule } from './two-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: twoPage }]),
    twoPageRoutingModule,
  ],
  declarations: [twoPage]
})
export class twoPageModule {}
