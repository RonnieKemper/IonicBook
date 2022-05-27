import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tableOfContentsPage } from './tableOfContents.page';

const routes: Routes = [
  {
    path: '',
    component: tableOfContentsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tableOfContentsPageRoutingModule {}
