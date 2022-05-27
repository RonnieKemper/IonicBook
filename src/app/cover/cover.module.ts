import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { coverPage } from './cover.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { coverPageRoutingModule } from './cover-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    coverPageRoutingModule
  ],
  declarations: [coverPage]
})
export class coverPageModule {}
