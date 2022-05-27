import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { threePage } from './three.page';

const routes: Routes = [
  {
    path: '',
    component: threePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class threePageRoutingModule {}
