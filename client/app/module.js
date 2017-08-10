var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { DefaultLayout } from "./layouts/default/default";
import { PagesModule } from "./pages/module";
import { RoutingModule } from "./routes";
import { CommunicateService } from "./services/communicate";
import { Master1Layout } from "./layouts/master1/master1";
import { Master2Layout } from "./layouts/master2/master2";
import { ControlsModule } from "./controls/module";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                DefaultLayout,
                Master1Layout,
                Master2Layout
            ],
            imports: [
                CommonModule,
                HttpModule,
                ControlsModule,
                PagesModule,
                RoutingModule
            ],
            providers: [
                CommunicateService
            ],
            exports: [
                DefaultLayout
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
