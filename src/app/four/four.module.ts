import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { fourPage } from './four.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { fourPageRoutingModule } from './four-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: fourPage }]),
    fourPageRoutingModule,
  ],
  declarations: [fourPage]
})
export class fourPageModule {}
