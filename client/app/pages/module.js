var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { Page1Page } from "./page1/page1";
import { Page2Page } from "./page2/page2";
import { IndexPage } from "./index/index";
import { ControlsModule } from "../controls/module";
import { RouterModule } from "@angular/router";
import { Page3Page } from "./page3/page3";
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    NgModule({
        declarations: [
            IndexPage,
            Page1Page,
            Page2Page,
            Page3Page
        ],
        imports: [
            RouterModule,
            ControlsModule
        ],
        exports: [
            IndexPage,
            Page1Page,
            Page2Page,
            Page3Page
        ]
    })
], PagesModule);
export { PagesModule };
