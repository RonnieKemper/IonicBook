import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { onePage } from './one.page';

const routes: Routes = [
  {
    path: '',
    component: onePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class onePageRoutingModule {}
