import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { coverPage } from './cover.page';

const routes: Routes = [
  {
    path: '',
    component: coverPage,
  },
  { 
    path: 'tableOfContents', 
    loadChildren: () => import('../tableOfContents/tableOfContents.module').then(m => m.tableOfContentsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class coverPageRoutingModule {}
