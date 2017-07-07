var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { DefaultLayout } from "./layouts/default";
import { BrowserModule } from "@angular/platform-browser";
import { PagesModule } from "./pages/module";
import { RoutingModule } from "./routes";
import { CommunicateService } from "./services/communicate";
import { Master1Layout } from "./layouts/master1";
import { Master2Layout } from "./layouts/master2";
import { ControlsModule } from "./controls/module";
let InitModule = class InitModule {
};
InitModule = __decorate([
    NgModule({
        declarations: [
            DefaultLayout,
            Master1Layout,
            Master2Layout
        ],
        imports: [
            BrowserModule,
            ControlsModule,
            PagesModule,
            RoutingModule
        ],
        providers: [CommunicateService],
        bootstrap: [
            DefaultLayout
        ]
    })
], InitModule);
export { InitModule };
