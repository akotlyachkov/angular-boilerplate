"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const default_1 = require("./layouts/default/default");
const module_1 = require("./pages/module");
const routes_1 = require("./routes");
const communicate_1 = require("./services/communicate");
const master1_1 = require("./layouts/master1/master1");
const master2_1 = require("./layouts/master2/master2");
const module_2 = require("./controls/module");
const common_1 = require("@angular/common");
const http_1 = require("@angular/http");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            default_1.DefaultLayout,
            master1_1.Master1Layout,
            master2_1.Master2Layout
        ],
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            module_2.ControlsModule,
            module_1.PagesModule,
            routes_1.RoutingModule
        ],
        providers: [communicate_1.CommunicateService],
        exports: [
            default_1.DefaultLayout
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map