import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';
import {Tab1Page} from "../tab1/tab1.page";
import {Tab2Page} from "../tab2/tab2.page";
import {Tab3Page} from "../tab3/tab3.page";

/*
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];
*/

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {path: 'tab1NavName', component: Tab1Page}
                ]
            },
            {
                path: 'tab2',
                children: [
                    {path: 'tab2NavName', component: Tab2Page}
                ]
            },
            {
                path: 'tab3',
                children: [
                    {path: 'tab3NavName', component: Tab3Page}
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
