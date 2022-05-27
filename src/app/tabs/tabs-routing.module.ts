import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cover',
        loadChildren: () => import('../cover/cover.module').then(m => m.coverPageModule)
      },
      {
        path: 'tableOfContents',
        loadChildren: () => import('../tableOfContents/tableOfContents.module').then(m => m.tableOfContentsPageModule)
      },
      {
        path: 'one',
        loadChildren: () => import('../one/one.module').then(m => m.onePageModule)
      },
      {
        path: 'two',
        loadChildren: () => import('../two/two.module').then(m => m.twoPageModule)
      },
      {
        path: 'three',
        loadChildren: () => import('../three/three.module').then(m => m.threePageModule)
      },
      {
        path: 'four',
        loadChildren: () => import('../four/four.module').then(m => m.fourPageModule)
      },
      {
        path: 'five',
        loadChildren: () => import('../five/five.module').then(m => m.fivePageModule)
      },
      {
        path: 'six',
        loadChildren: () => import('../six/six.module').then(m => m.sixPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
