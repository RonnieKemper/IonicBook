import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tableOfContentsPage } from './tableOfContents.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { tableOfContentsPageRoutingModule } from './tableOfContents-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    tableOfContentsPageRoutingModule
  ],
  declarations: [tableOfContentsPage]
})
export class tableOfContentsPageModule {}
