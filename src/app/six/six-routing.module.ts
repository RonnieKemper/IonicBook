import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sixPage } from './six.page';

const routes: Routes = [
  {
    path: '',
    component: sixPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class sixPageRoutingModule {}
