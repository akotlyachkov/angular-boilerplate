"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const page1_1 = require("./page1/page1");
const page2_1 = require("./page2/page2");
const index_1 = require("./index/index");
const module_1 = require("../controls/module");
const router_1 = require("@angular/router");
const page3_1 = require("./page3/page3");
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    core_1.NgModule({
        declarations: [
            index_1.IndexPage,
            page1_1.Page1Page,
            page2_1.Page2Page,
            page3_1.Page3Page
        ],
        imports: [
            router_1.RouterModule,
            module_1.ControlsModule
        ],
        exports: [
            index_1.IndexPage,
            page1_1.Page1Page,
            page2_1.Page2Page,
            page3_1.Page3Page
        ]
    })
], PagesModule);
exports.PagesModule = PagesModule;
//# sourceMappingURL=module.js.map