import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabsPage} from "./tabs/tabs.page";
import {Tab3Page} from "./tab3/tab3.page";
import {Tab2Page} from "./tab2/tab2.page";
import {Tab1Page} from "./tab1/tab1.page";

const routes: Routes = [
    {path: '', loadChildren: './pages/login/login.module#LoginPageModule'},
    //{path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
