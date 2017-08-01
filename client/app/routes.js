var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let RoutingModule = class RoutingModule {
};
RoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], RoutingModule);
export { RoutingModule };
//# sourceMappingURL=routes.js.map