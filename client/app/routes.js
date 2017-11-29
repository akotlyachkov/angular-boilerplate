import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Page1Page } from "./pages/page1/page1";
import { Page2Page } from "./pages/page2/page2";
import { IndexPage } from "./pages/index/index";
import { Master1Layout } from "./layouts/master1/master1";
import { Master2Layout } from "./layouts/master2/master2";
import { Control3Control } from "./controls/control3/control3";
import { Control4Control } from "./controls/control4/control4";
const routes = [
    {
        path: '', component: Master1Layout, children: [
            { path: '', component: IndexPage },
            { path: 'page1', component: Page1Page }
        ]
    },
    {
        path: 'page2', component: Master2Layout, children: [
            {
                path: '', component: Page2Page, children: [
                    { path: 'subpage3', component: Control3Control },
                    { path: 'subpage4', component: Control4Control },
                ]
            },
        ]
    }
];
export class RoutingModule {
}
RoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            },] },
];
RoutingModule.ctorParameters = () => [];
//# sourceMappingURL=routes.js.map