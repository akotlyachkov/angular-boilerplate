"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
require("rxjs");
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var app_module_1 = require("./app.module");
var platform_browser_1 = require("@angular/platform-browser");
var default_1 = require("./layouts/default/default");
var ServerAppModule = (function () {
    function ServerAppModule() {
    }
    ServerAppModule = __decorate([
        core_1.NgModule({
            bootstrap: [default_1.DefaultLayout],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({
                    appId: 'my-app-id'
                }),
                platform_server_1.ServerModule,
                app_module_1.AppModule
            ],
        })
    ], ServerAppModule);
    return ServerAppModule;
}());
exports.ServerAppModule = ServerAppModule;
