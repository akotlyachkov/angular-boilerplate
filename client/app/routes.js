"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const page1_1 = require("./pages/page1/page1");
const page2_1 = require("./pages/page2/page2");
const index_1 = require("./pages/index/index");
const master1_1 = require("./layouts/master1/master1");
const master2_1 = require("./layouts/master2/master2");
const control3_1 = require("./controls/control3/control3");
const control4_1 = require("./controls/control4/control4");
const routes = [
    {
        path: '', component: master1_1.Master1Layout, children: [
            { path: '', component: index_1.IndexPage },
            { path: 'page1', component: page1_1.Page1Page }
        ]
    },
    {
        path: 'page2', component: master2_1.Master2Layout, children: [
            {
                path: '', component: page2_1.Page2Page, children: [
                    { path: 'subpage3', component: control3_1.Control3Control },
                    { path: 'subpage4', component: control4_1.Control4Control },
                ]
            },
        ]
    }
];
let RoutingModule = class RoutingModule {
};
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], RoutingModule);
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=routes.js.map