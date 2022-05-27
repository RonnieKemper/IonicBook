import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { sixPage } from './six.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { sixPageRoutingModule } from './six-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: sixPage }]),
    sixPageRoutingModule,
  ],
  declarations: [sixPage]
})
export class sixPageModule {}
