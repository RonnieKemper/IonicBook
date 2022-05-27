import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fourPage } from './four.page';

const routes: Routes = [
  {
    path: '',
    component: fourPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class fourPageRoutingModule {}
